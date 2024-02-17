import { IThumbnailRepository } from "../../../repositories/thumbnail/IThumbnailRepository";

export class ListThumbnailUseCase {
	constructor(private thumbnailRepository: IThumbnailRepository) {}

	async execute() {
		return await this.thumbnailRepository.list();
	}
}
