var sanitize = {
    toBoolean: toBoolean
};

function toBoolean (object, field) {
    if (object[field] !== undefined) {
        object[field] = (object[field] == "true" || object[field] == "1" || object[field] == 1);
    } else {
        return false;
    }

}

module.exports = function () {
    return function (req, res, next) {
        console.log("define util sanitize part");
        req.sanitize = sanitize;
        next();
    };
};