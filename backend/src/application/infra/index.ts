import { Router } from "express";
import { thumbnailRoutes } from "./thumbnail/thumbnail-routes";
import { videoRoutes } from "./video/video-routes";

const appRoutes = Router();

appRoutes.use("/thumbnail", thumbnailRoutes);
appRoutes.use("/video", videoRoutes);

export { appRoutes };
