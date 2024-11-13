/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      message: " enter URL",
      name: "URL"
    }
  ])
  .then((answers) => {
    var url = answers.URL;
    const qr_svg = qr.image(url ,{ type: 'png' , size : 10 });
    qr_svg.pipe(fs.createWriteStream('QR.png'));
    
    fs.writeFile("QRimagesList.txt",url,(err) =>{
      if (err) throw err;
    });
    

  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
