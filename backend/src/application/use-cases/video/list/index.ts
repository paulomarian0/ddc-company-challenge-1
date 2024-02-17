import { PrismaVideoImplementation } from "../../../../application/repositories/video/implementation/PrismaVideoImplementation";
import { ListVideoController } from "./ListVideoController";
import { ListVideoUseCase } from "./ListVideoUseCase";

const repository = new PrismaVideoImplementation();

const useCase = new ListVideoUseCase(repository);

const controller = new ListVideoController(useCase);

export { controller as listVideoController };
