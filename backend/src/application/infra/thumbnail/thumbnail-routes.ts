import { Router } from "express";
import { uploadThumbnailController } from "../../use-cases/thumbnail";
import upload from "../../../helpers/multer";

const thumbnailRoutes = Router();

thumbnailRoutes.post("/upload", upload.single("file"), (req, res) => {
	uploadThumbnailController.handle(req, res);
});

export { thumbnailRoutes };
