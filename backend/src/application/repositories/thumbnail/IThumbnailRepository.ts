export interface IThumbnailRepository {
	upload(image?: string): Promise<void>;
}
