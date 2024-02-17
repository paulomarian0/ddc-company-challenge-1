import { IVideoRepository } from "../../../repositories/video/IVideoRepository";

export class UploadVideoUseCase {
	constructor(private videoRepository: IVideoRepository) {}

	async execute(video: string): Promise<void> {
		await this.videoRepository.upload(video);
	}
}
