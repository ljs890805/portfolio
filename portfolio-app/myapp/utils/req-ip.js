function getIp () {
    return ( this.headers["X-Forwarded-For"]
    || this.headers["x-forwarded-for"]
    || this.client.remoteAddress );
}

module.exports = function () {
    return function (req, res, next) {
        console.log("define util get request ip part");
        req.getIp = getIp;
        next();
    };
};