export class Thumbnail {
	id: string;
	name: string;
	createdAt: Date;

	constructor(id: string, name: string, createdAt: Date) {
		this.id = id;
		this.name = name;
		this.createdAt = createdAt;
	}
}
