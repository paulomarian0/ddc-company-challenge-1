import { Request, Response } from "express";
import { UploadThumbnailUseCase } from "./UploadThumbnailUseCase";
export class UploadThumbnailController {
	constructor(private useCase: UploadThumbnailUseCase) {}

	async handle(req: Request, res: Response): Promise<void> {
		await this.useCase.execute(req?.file?.originalname as string);

		res.json({ message: "Thumbnail sent successfully" });
	}
}
