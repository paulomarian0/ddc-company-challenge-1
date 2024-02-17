import { IVideoRepository } from "@/application/repositories/video/IVideoRepository";
import { IThumbnailRepository } from "../../../repositories/thumbnail/IThumbnailRepository";

export class DeleteVideoUseCase {
	constructor(private videoRepository: IVideoRepository) {}

	async execute(id: string) {
		const thumbnail = await this.videoRepository.find(id);

		if (!thumbnail) {
			throw new Error("Video not found");
		}

		await this.videoRepository.delete(id);

		return thumbnail;
	}
}
