import * as fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let data = await fs.promises.readdir('public/contactdata');
    fs.promises.writeFile(`public/contactdata/${data.length+1}.json`, JSON.stringify(req.body))
    return res.status(200).json(req)
  } else {
    res.status(200).json(["allBlogs"]);
  }
}