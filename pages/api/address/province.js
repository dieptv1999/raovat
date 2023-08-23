import path from "path";
import { promises as fs } from 'fs';
import {reduce} from "lodash/collection";

export default async function handler(req, res) {
    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDirectory + '/tinh_tp.json', 'utf8');
    const provinces = reduce(JSON.parse(fileContents), (rlt, val, key) => {
        return [...rlt, val]
    }, [])

    res.status(200).json(provinces);
}