import { useMutation, useQueryClient } from "react-query";

const deleteThumbnail = async (videoId: string) => {
	return await fetch(`http://localhost:3000/delete/thumbnail/${videoId}`, {
		method: "DELETE",
	});
};

const useDeleteThumbnail = () => {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: deleteThumbnail,
		onSuccess: () => {
			queryClient.invalidateQueries("thumbnails");
		},
	});

	return mutation;
};

export { useDeleteThumbnail };
