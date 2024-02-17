import * as fs from "fs";

const deleteFile = (filePath: string): Promise<void> => {
	return new Promise((resolve, reject) => {
		fs.unlink(filePath, (err) => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
};

export { deleteFile };
