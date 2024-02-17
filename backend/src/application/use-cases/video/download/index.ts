import { PrismaVideoImplementation } from "../../../../application/repositories/video/implementation/PrismaVideoImplementation";
import { DownloadVideoUseCase } from "./DownloadVideoUseCase";
import { DownloadVideoController } from "./DowloadVideoController";

const repository = new PrismaVideoImplementation();

const useCase = new DownloadVideoUseCase(repository);

const controller = new DownloadVideoController(useCase);

export { controller as downloadVideoController };
