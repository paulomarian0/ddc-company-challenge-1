import { IThumbnailRepository } from "../../../repositories/thumbnail/IThumbnailRepository";

export class UploadThumbnailUseCase {
	constructor(private thumbnailRepository: IThumbnailRepository) {}

	async execute(filename: string): Promise<void> {
		await this.thumbnailRepository.upload(filename);
	}
}
