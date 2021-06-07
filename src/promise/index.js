new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000)
}).then(() => {
    console.log("等待一秒");
    new Promise((r, j) => {
        setTimeout(() => {
            // r();
            j("error")
        }, 1000)
    }).then(() => {
        console.log("再等待一秒");
    }).catch(e => {
        console.log(e);
    })
})