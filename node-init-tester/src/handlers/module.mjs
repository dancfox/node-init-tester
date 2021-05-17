export const msg = await Promise.resolve("Success! Promise is resolved.");


// export const five = "five";

// import * as http from 'https'
// const options = {
//   hostname: 'docs.aws.amazon.com',
//   port: 443,
//   path: '/serverless-application-model/latest/developerguide/serverless-application-model-updates.rss',
//   method: 'GET'
// }

// function doRequest(options) {
//     return new Promise ( (resolve, reject) => {
//         let req = http.request(options, function(res) {
//             var body='';
//             res.on('data', data => {
//                 body+=data;
//             });
//             res.on('end', data => {
//                 console.log('Success! Request returned.')
//                 resolve(body);
//             });
//             res.on('error', err => {
//                 console.log(err)
//                 reject(err);
//             });
//         });
//         req.end();
//     })
// }

// // const response = await doRequest(options);
// let response = "yass";
// exports.res = response;

