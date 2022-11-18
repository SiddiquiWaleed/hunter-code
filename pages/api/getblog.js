// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const fs = require('fs');

export default function handler (req, res) {
fs.readFile(`public/blogdata/${req.query.slug}.json`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  res.status(200).json(JSON.parse(data))
  console.log(data);
});
}