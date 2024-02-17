export class File {
	id: string;
	title: string;
	videoFilePath: string;
	thumbnailPath: string;

	constructor(
		id: string,
		title: string,
		videoFilePath: string,
		thumbnailPath: string,
	) {
		this.id = id;
		this.title = title;
		this.videoFilePath = videoFilePath;
		this.thumbnailPath = thumbnailPath;
	}
}
