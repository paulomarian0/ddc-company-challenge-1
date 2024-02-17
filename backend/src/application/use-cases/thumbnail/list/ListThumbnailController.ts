import { Request, Response } from "express";
import { ListThumbnailUseCase } from "./ListThumbnailUseCase";

export class ListThumbnailController {
	constructor(private useCase: ListThumbnailUseCase) {}

	async handle(req: Request, res: Response) {
		const list = await this.useCase.execute();

		return res.json(list);
	}
}
