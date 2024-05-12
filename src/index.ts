import express from 'express';
import bodyParser from 'body-parser';
import partidasRoutes from './routers/partidasRouters';
import jogadoresRoutes from './routers/jogadoresRouters';
import timesRoutes from './routers/timesRouters';
import autenticacaoRoutes from './routers/autenticacaoRouters';
import { verifarToken } from './middleware/autenticacaoMiddleware';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(partidasRoutes);
app.use(jogadoresRoutes);
app.use(timesRoutes);
app.use('/autenticar', autenticacaoRoutes);

app.get('/protegido', verifarToken, (req, res) => {
  res.json({ message: 'Rota protegida encontrada' });
});

app.get('/', (req, res) => {
    res.send('API esta funcionando');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});