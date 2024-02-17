import { Video } from "../../../application/entites/Video";

export interface IVideoRepository {
	upload(video?: string): Promise<void>;
	list(): Promise<Video[]>;
}
