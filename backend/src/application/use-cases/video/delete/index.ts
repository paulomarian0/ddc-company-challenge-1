import { PrismaVideoImplementation } from "../../../../application/repositories/video/implementation/PrismaVideoImplementation";
import { DeleteVideoController } from "./DeleteVideoController";
import { DeleteVideoUseCase } from "./DeleteVideolUseCase";

const repository = new PrismaVideoImplementation();

const useCase = new DeleteVideoUseCase(repository);

const controller = new DeleteVideoController(useCase);

export { controller as deleteVideoController };
