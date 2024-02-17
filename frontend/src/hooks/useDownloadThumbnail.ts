import { useMutation } from "react-query";

const downloadThumbnail = async (thumbnailId: string) => {
	return await fetch(
		`http://localhost:3000/download/thumbnail/${thumbnailId}`,
		{
			method: "GET",
		},
	);
};

const useDownloadThumbnail = () => {
	const mutation = useMutation({
		mutationFn: downloadThumbnail,
	});

	return mutation;
};

export { useDownloadThumbnail };
