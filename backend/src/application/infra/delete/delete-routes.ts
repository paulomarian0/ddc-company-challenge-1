import { deleteVideoController } from "../../../application/use-cases/video/delete";
import { deleteThumbnailController } from "../../../application/use-cases/thumbnail/delete";
import { Router } from "express";

const deleteRoutes = Router();

deleteRoutes.delete("/video/:id", (req, res) =>
	deleteVideoController.handle(req, res),
);

deleteRoutes.delete("/thumbnail/:id", (req, res) =>
	deleteThumbnailController.handle(req, res),
);

export { deleteRoutes };
