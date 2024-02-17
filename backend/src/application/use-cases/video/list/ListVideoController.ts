import { Request, Response } from "express";
import { ListVideoUseCase } from "./ListVideoUseCase";

export class ListVideoController {
	constructor(private useCase: ListVideoUseCase) {}

	async handle(req: Request, res: Response) {
		const list = await this.useCase.execute();

		return res.json(list);
	}
}
