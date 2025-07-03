import express from 'express';
import userRoute from './src/routes/user.route.js';
import connectDatabase from './src/database/db.js';

const app = express();

const PORT = 3000;

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));