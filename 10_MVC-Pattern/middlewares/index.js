const fs = require("fs");

const logReqRes = (fileName) => {
  return (req, res, next) => {
    console.log("Hello from Middleware Two", req.mayUserName);
    fs.appendFile(
      fileName,
      `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}`,
      (err, data) => {
        next();
      },
    );
  };
};

module.exports = {
    logReqRes
}
