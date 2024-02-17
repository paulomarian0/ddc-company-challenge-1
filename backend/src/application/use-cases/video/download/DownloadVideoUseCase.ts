import { IVideoRepository } from "../../../../application/repositories/video/IVideoRepository";

export class DownloadVideoUseCase {
	constructor(private videoRepository: IVideoRepository) {}

	async execute(id: string) {
		const video = await this.videoRepository.find(id);

		if (!video) {
			throw new Error("Video not found");
		}

		return video;
	}
}
