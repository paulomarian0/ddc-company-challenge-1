import { Router } from "express";
import { uploadRoutes } from "./upload/upload-routes";
import { listRoutes } from "./list/list-routes";
import { downloadRoutes } from "./download/download-routes";

const appRoutes = Router();

appRoutes.use("/upload", uploadRoutes);
appRoutes.use("/list", listRoutes);
appRoutes.use("/download", downloadRoutes);

export { appRoutes };
