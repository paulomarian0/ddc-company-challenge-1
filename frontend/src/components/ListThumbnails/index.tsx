import { useDeleteThumbnail } from "../../hooks/useDeleteThumbnail";
import { useDownloadThumbnail } from "../../hooks/useDownloadThumbnail";
import { useListThumbnail } from "../../hooks/useListThumbnails";

interface IThumbnail {
	id: string;
	name: string;
	createdAt: string;
}

const ListThumbnails = () => {
	const { data } = useListThumbnail();
	const { mutateAsync } = useDeleteThumbnail();
	const { mutateAsync: downloadThumbnail } = useDownloadThumbnail();

	const handleDeleteThumbnail = (id: string) => {
		mutateAsync(id);
	};

	const handleDownloadThumbnail = async (id: string) => {
		downloadThumbnail(id);
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<h2 className="text-2xl font-bold mb-4">Thumbnails</h2>
			<div className="grid grid-cols-1 gap-4">
				{data.length === 0 && (
					<p className="text-gray-500 text-center">
						Nenhuma thumbnail encontrada
					</p>
				)}
				{data?.map((thumbnail: IThumbnail) => (
					<div
						key={thumbnail.id}
						className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center"
					>
						<div>
							<h3
								className="text-lg font-semibold mb-1 truncate"
								title={thumbnail.name}
							>
								{thumbnail.name}
							</h3>
							<p className="text-gray-500 text-sm mb-1">ID: {thumbnail.id}</p>
							<p className="text-gray-500 text-sm">
								Criado em: {new Date(thumbnail.createdAt).toLocaleString()}
							</p>
						</div>
						<button
							onClick={() => handleDownloadThumbnail(thumbnail.id)}
							className="text-blue-500 hover:text-blue-700 focus:outline-none"
							type="button"
						>
							Download
						</button>
						<button
							type="button"
							onClick={() => handleDeleteThumbnail(thumbnail.id)}
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

export { ListThumbnails };
