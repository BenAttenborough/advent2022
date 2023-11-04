import { open } from 'node:fs/promises';
import * as path from 'path';


export const readFile = async (dir: string, file: string): Promise<string> => {
    let filehandle =
        await open(path.join(dir, file), 'r');
    let data =
        await filehandle.readFile("utf8");
    console.log('Data read successfully');
    filehandle.close();
    return data;
}