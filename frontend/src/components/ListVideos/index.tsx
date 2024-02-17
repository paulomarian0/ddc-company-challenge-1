import { useDeleteVideo } from "../../hooks/useDeleteVideo";
import { useDownloadVideo } from "../../hooks/useDownloadVideo";
import { useListVideos } from "../../hooks/useListVideos";

interface IVideos {
	id: string;
	name: string;
	createdAt: string;
}

const ListVideos = () => {
	const { data } = useListVideos();
	const { mutateAsync } = useDeleteVideo();
	const { mutateAsync: downloadVideo } = useDownloadVideo();

	const handleDeleteVideo = (id: string) => {
		mutateAsync(id);
	};

	const handleDownloadVideo = async (id: string) => {
		downloadVideo(id);
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h2 className="text-2xl font-bold mb-4">Vídeos</h2>
			<div className="grid grid-cols-1  gap-4">
				{data?.length === 0 && (
					<p className="text-gray-500 text-center">Nenhum vídeo encontrado</p>
				)}
				{data?.map((video: IVideos) => (
					<div
						key={video.id}
						className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center"
					>
						<div>
							<h3
								className="text-lg font-semibold mb-1 truncate"
								title={video.name}
							>
								{video.name}
							</h3>
							<p className="text-gray-500 text-sm mb-1">ID: {video.id}</p>
							<p className="text-gray-500 text-sm">
								Criado em: {new Date(video.createdAt).toLocaleString()}
							</p>
						</div>
						<button
							onClick={() => handleDownloadVideo(video.id)}
							className="text-blue-500 hover:text-blue-700 focus:outline-none"
							type="button"
						>
							Download
						</button>
						<button
							type="button"
							onClick={() => handleDeleteVideo(video.id)}
							className="text-red-500 hover:text-red-700 focus:outline-none"
						>
							Deletar
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export { ListVideos };
