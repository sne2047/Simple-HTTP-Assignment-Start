const fs = require('fs');// add the file system so I can get the image I need properly

const imageIndex = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(imageIndex);
  response.end();
};

module.exports.getImage = getImage;
