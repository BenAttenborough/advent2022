const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

exports.readFile = async (dir: string, file: string): Promise<string> => {
    let filehandle =
        await fsPromises.open(path.join(dir, file), 'r');
    let data =
        await filehandle.readFile("utf8");
    console.log('Data read successfully');
    filehandle.close();
    return data;
}