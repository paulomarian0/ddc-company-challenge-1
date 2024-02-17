import { IThumbnailRepository } from "../../../../application/repositories/thumbnail/IThumbnailRepository";

export class DownloadThumbnailUseCase {
	constructor(private thumbnailRepository: IThumbnailRepository) {}

	async execute(id: string) {
		const thumbnail = await this.thumbnailRepository.find(id);

		if (!thumbnail) {
			throw new Error("Thumbnail not found");
		}

		return thumbnail;
	}
}
