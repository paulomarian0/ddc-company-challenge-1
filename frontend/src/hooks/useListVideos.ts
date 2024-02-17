import { useQuery } from "react-query";

const fetchVideos = async () => {
	const response = await fetch("http://localhost:3000/list/video");
	const data = await response.json();
	return data;
};

export const useListVideos = () => {
	const query = useQuery({
		queryFn: fetchVideos,
		queryKey: "videos",
	});

	return query;
};
