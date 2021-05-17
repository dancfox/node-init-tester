/**
 * Sleep for a specified amount of time
 */

// change this variable to adjust sleep duration
const sleep_duration = 3; // (ms)
let resolved = false;

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms)).then(() => {resolved = true});
}
console.log("Going to sleep for " + sleep_duration.toString() + " ms");
sleep(sleep_duration)

 exports.handler = async () => {
 
     let message;
     if (resolved == false) {
         message = "Still sleeping...";
     } else {
         message = "Success! Sleeping function returned after " + sleep_duration.toString() + " ms.";
     }
 
     // All log statements are written to CloudWatch
     console.info(`${message}`);
     
     return message;
 }
 
 
 