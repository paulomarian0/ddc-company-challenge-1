import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		let destinationPath = "";

		if (
			!file.mimetype.startsWith("image/") &&
			!file.mimetype.startsWith("video/")
		) {
			cb(new Error("File type not supported"), "");
		}

		if (file.mimetype.startsWith("image/")) {
			destinationPath = path.join(__dirname, "..", "..", "uploads/thumbnails");
		}

		if (file.mimetype.startsWith("video/")) {
			destinationPath = path.join(__dirname, "..", "..", "uploads/videos");
		}

		cb(null, destinationPath);
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: storage });

export default upload;
