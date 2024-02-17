import { databaseAdapter } from "../../../../application/adapters/database";
import { IThumbnailRepository } from "../IThumbnailRepository";

export class PrismaThumbnailImplementation implements IThumbnailRepository {
	private repository: typeof databaseAdapter;

	constructor() {
		this.repository = databaseAdapter;
	}

	async upload(image: string): Promise<void> {
		await this.repository.thumbnail.create({
			data: {
				name: image,
			},
		});
	}
}
