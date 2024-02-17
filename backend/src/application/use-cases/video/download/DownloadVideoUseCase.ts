import { IVideoRepository } from "../../../../application/repositories/video/IVideoRepository";

export class DownloadVideoUseCase {
	constructor(private videoRepository: IVideoRepository) {}

	async execute(id: string) {
		return await this.videoRepository.find(id);
	}
}
