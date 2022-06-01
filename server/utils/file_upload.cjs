let path = require("path")
let util = require("util")

exports.upload = async(req) => {

  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return 'No files were uploaded.';
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = path.join(__dirname, '..', '..' , 'public', 'uploads', sampleFile.name);

  // Use the mv() method to place the file somewhere on your server
  // sampleFile.mv(uploadPath, function (err) {
  //   if (err)
  //     return err;

  //   return 'File uploaded!';
  // });

  await util.promisify(sampleFile.mv)(uploadPath);
  return 'File uploaded!';

}
