const fs = require('fs')

// this middlewares check that in which route the users hit and send the data to log.txt file
function logReqRes(filename) {
    return (req, res, next) => {
        fs.appendFile(filename, `${Date.now()} : ${req.ip} : ${req.method} : ${req.path} \n`, (err, data) => {
            next()
        })
    }
}

module.exports = {
    logReqRes,
}