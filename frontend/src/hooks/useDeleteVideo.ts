import { useMutation, useQueryClient } from "react-query";

const deleteVideo = async (videoId: string) => {
	return await fetch(`http://localhost:3000/delete/video/${videoId}`, {
		method: "DELETE",
	});
};

const useDeleteVideo = () => {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: deleteVideo,
		onSuccess: () => {
			queryClient.invalidateQueries("videos");
		},
	});

	return mutation;
};

export { useDeleteVideo };
