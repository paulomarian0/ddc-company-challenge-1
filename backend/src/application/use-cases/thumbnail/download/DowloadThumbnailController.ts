import { copyFile } from "../../../../helpers/downloadFile";
import { Request, Response } from "express";
import { DownloadThumbnailUseCase } from "./DownloadThumbnailUseCase";

export class DownloadThumbnailController {
	constructor(private useCase: DownloadThumbnailUseCase) {}

	async handle(request: Request, response: Response) {
		const { id } = request.params;

		const image = await this.useCase.execute(id);

		await copyFile(`./uploads/thumbnails/${image?.name}`);

		return response.json({ message: "Downloaded successfully" });
	}
}
