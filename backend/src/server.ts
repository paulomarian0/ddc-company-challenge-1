import express from "express";
import cors from "cors";
import { env } from "./helpers/env";
import { appRoutes } from "./application/infra";

const app = express();

app.use(cors());

app.use(express.json());

const PORT = env.PORT;

app.use(appRoutes);

app.listen(PORT, () => {
	console.log(`Servidor iniciado na porta ${PORT}`);
});
