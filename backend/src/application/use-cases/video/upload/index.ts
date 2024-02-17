import { PrismaVideoImplementation } from "../../../repositories/video/implementation/PrismaVideoImplementation";
import { UploadVideoUseCase } from "./UploadVideoUseCase";
import { UploadVideoController } from "./UploadVideoController";

const repository = new PrismaVideoImplementation();

const useCase = new UploadVideoUseCase(repository);

const controller = new UploadVideoController(useCase);

export { controller as uploadVideoController };
