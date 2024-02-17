import { useMutation } from "react-query";

const downloadVideo = async (videoId: string) => {
	return await fetch(`http://localhost:3000/download/video/${videoId}`, {
		method: "GET",
	});
};

const useDownloadVideo = () => {
	const mutation = useMutation({
		mutationFn: downloadVideo,
	});

	return mutation;
};

export { useDownloadVideo };
