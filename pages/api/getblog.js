// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const fs = require('fs');

export default function handler (req, res) {
fs.readFile(`blogdata/${req.query.slug}.json`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  var data1 = data;
  res.send(data1);
});
}