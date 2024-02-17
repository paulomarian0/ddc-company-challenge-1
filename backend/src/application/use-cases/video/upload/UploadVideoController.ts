import { UploadVideoUseCase } from "./UploadVideoUseCase";
import { Request, Response } from "express";
export class UploadVideoController {
	constructor(private useCase: UploadVideoUseCase) {}

	async handle(req: Request, res: Response): Promise<void> {
		await this.useCase.execute(req?.file?.originalname as string);

		res.json({ message: "Video sent successfully" });
	}
}
