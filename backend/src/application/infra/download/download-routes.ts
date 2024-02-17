import { downloadThumbnailController } from "../../../application/use-cases/thumbnail/download";
import { downloadVideoController } from "../../../application/use-cases/video/download";
import { Router } from "express";

const downloadRoutes = Router();

downloadRoutes.get("/video/:id", (req, res) =>
	downloadVideoController.handle(req, res),
);

downloadRoutes.get("/thumbnail/:id", (req, res) =>
	downloadThumbnailController.handle(req, res),
);

export { downloadRoutes };
