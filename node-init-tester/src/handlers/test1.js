/**
 * Get a 1 MB file from S3
 */

// Load the AWS SDK
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

let file;

var params = {
    Bucket: "dfox-demo", 
    Key: "1mbfile.txt"
   };

   s3.getObject(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else file = data;           // successful response
  });

exports.handler = async () => {

    let message;

    if (file == undefined) {
        message = "Failed. File not retrieved from S3."
    } else {
        console.log("data = " + file);
        message = "Success! Retrieved 1MB file from S3."
    }

    // All log statements are written to CloudWatch
    console.info(`${message}`);
    
    return message;
}


