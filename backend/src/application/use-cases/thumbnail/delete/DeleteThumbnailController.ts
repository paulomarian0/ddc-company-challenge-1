import { deleteFile } from "../../../../helpers/deleteFile";
import { DeleteThumbnailUseCase } from "./DeleteThumbnailUseCase";
import { Request, Response } from "express";

export class DeleteThumbnailController {
	constructor(private useCase: DeleteThumbnailUseCase) {}

	async handle(req: Request, res: Response) {
		const { id } = req.params;

		const image = await this.useCase.execute(id);

		await deleteFile(`./uploads/thumbnails/${image?.name}`);

		return res.json({ message: "Deleted successfully" });
	}
}
