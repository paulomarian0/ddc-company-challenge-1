import { PrismaThumbnailImplementation } from "../../../../application/repositories/thumbnail/implementation/PrismaThumbnailImplementation";
import { DownloadThumbnailController } from "./DowloadThumbnailController";
import { DownloadThumbnailUseCase } from "./DownloadThumbnailUseCase";

const repository = new PrismaThumbnailImplementation();

const useCase = new DownloadThumbnailUseCase(repository);

const controller = new DownloadThumbnailController(useCase);

export { controller as downloadThumbnailController };
