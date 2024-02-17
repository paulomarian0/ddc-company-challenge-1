import { useMutation, useQueryClient } from "react-query";

const uploadThumbnail = async (file: File) => {
	const formData = new FormData();
	formData.append("file", file);

	const response = await fetch("http://localhost:3000/upload/thumbnail", {
		method: "POST",
		body: formData,
	});

	return response;
};

const useUploadThumbnail = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: uploadThumbnail,
		onSuccess: () => {
			queryClient.invalidateQueries("thumbnails");
		},
	});

	return mutation;
};

export { useUploadThumbnail };
