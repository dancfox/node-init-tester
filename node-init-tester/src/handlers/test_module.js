// let p = import('./module.mjs')          // FAILS
// let p = await import('./module.mjs')    // FAILS

exports.handler = async () => {

    // let p = import('./module.mjs')          // FAILS
    let p = await import('./module.mjs')    // SUCCEEDS

    if (p.msg) {
        console.log(p.msg);
    } else {
        console.log("Failed. Promise not resolved.");
    }

    return p.msg;
};
