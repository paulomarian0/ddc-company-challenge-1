import { PrismaThumbnailImplementation } from "../../repositories/thumbnail/implementation/PrismaThumbnailImplementation";
import { UploadThumbnailController } from "./UploadThumbnailController";
import { UploadThumbnailUseCase } from "./UploadThumbnailUseCase";

const repository = new PrismaThumbnailImplementation();

const useCase = new UploadThumbnailUseCase(repository);

const controller = new UploadThumbnailController(useCase);

export { controller as uploadThumbnailController };
