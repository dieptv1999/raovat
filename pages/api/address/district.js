import path from "path";
import {promises as fs} from 'fs';
import {filter, reduce} from "lodash/collection";

export default async function handler(req, res) {
    const {
        query: {code},
        method,
    } = req;

    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDirectory + '/quan_huyen.json', 'utf8');
    const district = reduce(JSON.parse(fileContents), (rlt, val, key) => {
        return [...rlt, val]
    }, [])

    res.status(200).json(filter(district, {'parent_code': code}));
}