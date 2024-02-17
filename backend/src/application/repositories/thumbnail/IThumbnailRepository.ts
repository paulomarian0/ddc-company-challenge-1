import { Thumbnail } from "@/application/entites/Thumbnail";

export interface IThumbnailRepository {
	upload(image?: string): Promise<void>;
	list(): Promise<Thumbnail[]>;
}