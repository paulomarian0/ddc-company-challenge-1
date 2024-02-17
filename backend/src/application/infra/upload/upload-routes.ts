import { uploadThumbnailController } from "../../use-cases/thumbnail/upload";
import { uploadVideoController } from "../../use-cases/video/upload";
import upload from "../../../helpers/multer";
import { Router } from "express";

const uploadRoutes = Router();

uploadRoutes.post("/thumbnail", upload.single("file"), (req, res) =>
	uploadThumbnailController.handle(req, res),
);

uploadRoutes.post("/video", upload.single("file"), (req, res) =>
	uploadVideoController.handle(req, res),
);

export { uploadRoutes };
