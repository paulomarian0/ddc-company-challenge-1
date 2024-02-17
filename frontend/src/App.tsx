import { ListThumbnails } from "./components/ListThumbnails";
import { ListVideos } from "./components/ListVideos";
import { UploadFile } from "./components/UploadFile";

function App() {
	return (
		<div>
			<ListVideos />
			<ListThumbnails />
			<UploadFile />
		</div>
	);
}

export default App;
