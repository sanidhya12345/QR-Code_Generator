const inquirer=require('inquirer');
const qr=require('qr-image');
const fs=require('fs');
inquirer
  .prompt([
      {
        message:"Type URL:- ",
        name:"URL"
      }
  ])
  .then((answers) => {
     const url=answers.URL;
     var qr_png = qr.image(url);
     qr_png.pipe(fs.createWriteStream('qr_img.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});
