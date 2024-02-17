import { PrismaThumbnailImplementation } from "../../../../application/repositories/thumbnail/implementation/PrismaThumbnailImplementation";
import { DeleteThumbnailController } from "./DeleteThumbnailController";
import { DeleteThumbnailUseCase } from "./DeleteThumbnailUseCase";

const repository = new PrismaThumbnailImplementation();

const useCase = new DeleteThumbnailUseCase(repository);

const controller = new DeleteThumbnailController(useCase);

export { controller as deleteThumbnailController };
