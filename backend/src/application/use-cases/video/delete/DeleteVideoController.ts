import { deleteFile } from "../../../../helpers/deleteFile";
import { Request, Response } from "express";
import { DeleteVideoUseCase } from "./DeleteVideolUseCase";

export class DeleteVideoController {
	constructor(private useCase: DeleteVideoUseCase) {}

	async handle(req: Request, res: Response) {
		const { id } = req.params;

		const image = await this.useCase.execute(id);

		await deleteFile(`./uploads/videos/${image?.name}`);

		return res.json({ message: "Deleted successfully" });
	}
}
