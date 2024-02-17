import { Router } from "express";
import { uploadThumbnailController } from "../../use-cases/thumbnail";
import upload from "../../../helpers/multer";

const videoRoutes = Router();

videoRoutes.post("/upload", upload.single("file"), (req, res) => {
	uploadThumbnailController.handle(req, res);
});

export { videoRoutes };
