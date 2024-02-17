import { IVideoRepository } from "../../../repositories/video/IVideoRepository";
import { IThumbnailRepository } from "../../../repositories/thumbnail/IThumbnailRepository";

export class ListVideoUseCase {
	constructor(private videoRepository: IVideoRepository) {}

	async execute() {
		return await this.videoRepository.list();
	}
}
