import { copyFile } from "../../../../helpers/downloadFile";
import { DownloadVideoUseCase } from "./DownloadVideoUseCase";
import { Request, Response } from "express";

export class DownloadVideoController {
	constructor(private useCase: DownloadVideoUseCase) {}

	async handle(request: Request, response: Response) {
		const { id } = request.params;

		const video = await this.useCase.execute(id);

		await copyFile(`./uploads/videos/${video?.name}`);

		return response.download(`./uploads/videos/${video?.name}`);
	}
}
