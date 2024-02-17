import { listVideoController } from "../../../application/use-cases/video/list";
import { listThumbnailController } from "../../../application/use-cases/thumbnail/list";
import { Router } from "express";

const listRoutes = Router();

listRoutes.get("/thumbnail", (req, res) =>
	listThumbnailController.handle(req, res),
);

listRoutes.get("/video", (req, res) => listVideoController.handle(req, res));

export { listRoutes };
