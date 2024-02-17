import { useState } from "react";
import { useUploadVideo } from "../../hooks/useUploadVideo";
import { useUploadThumbnail } from "../../hooks/useUploadThumbnail";

const UploadFile = () => {
	const [file, setFile] = useState<File | null>(null);
	const uploadVideoMutation = useUploadVideo();
	const uploadThumbnailMutation = useUploadThumbnail();
	const [progress, setProgress] = useState(0);

	const onSubmit = async () => {
		if (!file) {
			console.error("Nenhum arquivo selecionado");
			return;
		}

		try {
			setProgress(50);
			if (file.type.includes("image")) {
				await uploadThumbnailMutation.mutateAsync(file);
			} else {
				await uploadVideoMutation.mutateAsync(file);
			}
			setProgress(100);
		} catch (error) {
			console.error("Erro ao fazer upload do vídeo:", error);
		} finally {
			setProgress(0);
		}
	};

	return (
		<div className="p-16 space-y-10">
			<div className="flex justify-center items-center space-x-2">
				<label
					htmlFor="file_input"
					className="flex-1 flex items-center justify-center bg-gray-200 rounded-lg p-4 cursor-pointer border border-gray-300"
				>
					{file ? file.name : "Selecionar arquivo"}
					<input
						id="file_input"
						type="file"
						className="hidden"
						accept="image/*, video/*"
						onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
					/>
				</label>
				<button
					type="button"
					onClick={onSubmit}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded"
				>
					Upload
				</button>
			</div>
			<div className=" w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
				<div
					className="bg-blue-600 h-2.5 rounded-full"
					style={{ width: `${progress}%` }}
				/>
			</div>
		</div>
	);
};

export { UploadFile };
