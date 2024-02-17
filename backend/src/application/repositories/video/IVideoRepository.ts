import { Video } from "../../../application/entites/Video";

export interface IVideoRepository {
	upload(video?: string): Promise<void>;
	list(): Promise<Video[]>;
	find(id: string): Promise<Video | null>;
	delete(id: string): Promise<void>;
}
