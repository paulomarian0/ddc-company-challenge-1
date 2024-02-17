import { Router } from "express";
import { uploadRoutes } from "./upload/upload-routes";
import { listRoutes } from "./list/list-routes";

const appRoutes = Router();

appRoutes.use("/upload", uploadRoutes);
appRoutes.use("/list", listRoutes);

export { appRoutes };