import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

interface User {
    username: string;
    password: string;
}

const SECRET_KEY = process.env.SECRET_KEY || 'chave_acesso';
const users: User[] = [];

export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const user = users.find(user => user.username === username);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Credenciais invalidas' });
        }
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '24h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Credenciais invalidas' });
    }
};

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        if (users.find(user => user.username === username)) {
            return res.status(400).json({ message: 'Nome de usuario ja existe' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser: User = { username, password: hashedPassword };
        users.push(newUser);
        res.status(201).json({ message: 'Usuario registrado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao registrar usuario' });
    }
};