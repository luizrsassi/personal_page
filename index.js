import express from 'express';
import userRoute from './src/routes/user.route.js'

const app = express();

const PORT = 3000;
app.use(express.json());
app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));