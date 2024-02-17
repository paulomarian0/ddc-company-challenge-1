import { IThumbnailRepository } from "../../../../application/repositories/thumbnail/IThumbnailRepository";

export class DeleteThumbnailUseCase {
	constructor(private thumbnailRepository: IThumbnailRepository) {}

	async execute(id: string) {
		const thumbnail = await this.thumbnailRepository.find(id);

		if (!thumbnail) {
			throw new Error("Thumbnail not found");
		}

		await this.thumbnailRepository.delete(id);

		return thumbnail;
	}
}
