import { IThumbnailRepository } from "../../repositories/thumbnail/IThumbnailRepository";

export class UploadThumbnailUseCase {
	constructor(private thumbnailRepository: IThumbnailRepository) {}

	async execute(filename: string, filePath: string): Promise<void> {
		await this.thumbnailRepository.upload(filename);
	}
}
