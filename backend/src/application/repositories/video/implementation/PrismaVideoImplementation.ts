import { databaseAdapter } from "../../../../application/adapters/database";
import { IVideoRepository } from "../IVideoRepository";

export class PrismaVideoImplementation implements IVideoRepository {
	private repository: typeof databaseAdapter;

	constructor() {
		this.repository = databaseAdapter;
	}

	async upload(video: string): Promise<void> {
		await this.repository.video.create({
			data: {
				name: video,
			},
		});
	}

	async list() {
		return await this.repository.video.findMany({});
	}

	async find(id: string) {
		return await this.repository.video.findUnique({
			where: {
				id: id,
			},
		});
	}

	async delete(id: string): Promise<void> {
		await this.repository.video.delete({
			where: {
				id: id,
			},
		});
	}
}
