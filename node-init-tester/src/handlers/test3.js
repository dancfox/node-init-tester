/**
 * Get an item from DynamoDB
 */

let item;

var AWS = require('aws-sdk'); 
var documentClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName : 'Movies',
    Key: {
      year: 2013,
      title: 'Gravity'
    }
};
  
documentClient.get(params, function(err, data) {
    if (err) console.log(err);
    else item = data;
});
 
 exports.handler = async () => {
 
     let message;
 
     if (item == undefined) {
         message = "Failed. Query not returned from DynamoDB."
     } else {
         console.log("query results = " + JSON.stringify(item));
         message = "Success! Query returned from DynamoDB."
     }
 
     // All log statements are written to CloudWatch
     console.info(`${message}`);
     
     return message;
 }
 
 
 