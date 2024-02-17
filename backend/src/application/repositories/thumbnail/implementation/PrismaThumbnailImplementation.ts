import { databaseAdapter } from "../../../../application/adapters/database";
import { IThumbnailRepository } from "../IThumbnailRepository";

export class PrismaThumbnailImplementation implements IThumbnailRepository {
	private repository: typeof databaseAdapter;

	constructor() {
		this.repository = databaseAdapter;
	}

	async upload(image: string) {
		await this.repository.thumbnail.create({
			data: {
				name: image,
			},
		});
	}

	async list() {
		return await this.repository.thumbnail.findMany({});
	}

	async find(id: string) {
		return await this.repository.thumbnail.findUnique({
			where: {
				id: id,
			},
		});
	}

	async delete(id: string) {
		await this.repository.thumbnail.delete({
			where: {
				id: id,
			},
		});
	}
}
