import { useMutation, useQueryClient } from "react-query";

const uploadVideo = async (file: File) => {
	const formData = new FormData();
	formData.append("file", file);

	const response = await fetch("http://localhost:3000/upload/video", {
		method: "POST",
		body: formData,
	});

	return response;
};

const useUploadVideo = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: uploadVideo,
		onSuccess: () => {
			queryClient.invalidateQueries("videos");
		},
	});

	return mutation;
};

export { useUploadVideo };
