import { PrismaThumbnailImplementation } from "../../../repositories/thumbnail/implementation/PrismaThumbnailImplementation";
import { ListThumbnailController } from "./ListThumbnailController";
import { ListThumbnailUseCase } from "./ListThumbnailUseCase";

const repository = new PrismaThumbnailImplementation();

const useCase = new ListThumbnailUseCase(repository);

const controller = new ListThumbnailController(useCase);

export { controller as listThumbnailController };
