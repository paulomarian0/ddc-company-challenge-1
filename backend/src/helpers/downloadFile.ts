import * as fs from "fs";
import * as path from "path";

const copyFile = (source: string): Promise<void> => {
	const fileName = source.split("/").at(-1);

	const destination: string = path.join(
		__dirname,
		"..",
		"..",
		"downloads",
		fileName as string,
	);

	return new Promise((resolve, reject) => {
		const readStream = fs.createReadStream(source);
		const writeStream = fs.createWriteStream(destination);

		readStream.on("error", reject);
		writeStream.on("error", reject);

		writeStream.on("finish", () => {
			resolve();
		});

		readStream.pipe(writeStream);
	});
};

export { copyFile };
