import { useQuery } from "react-query";

const fetchThumbnails = async () => {
	const response = await fetch("http://localhost:3000/list/thumbnail");
	const data = await response.json();
	return data;
};

export const useListThumbnail = () => {
	const query = useQuery({
		queryFn: fetchThumbnails,
		queryKey: "thumbnails",
	});

	return query;
};
