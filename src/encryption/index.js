const XorEncryption = function (key) {
    this.key = key;
};

XorEncryption.prototype.encrypt = function (valueToEncrypt) {
    let result = '';
    for (let i = 0; i < valueToEncrypt.length; i++) {
        result += String.fromCharCode(this.key ^ valueToEncrypt.charCodeAt(i));
    }

    return result;
};

XorEncryption.prototype.decrypt = function (hash) {
    let result = '';
    for (let i = 0; i < hash.length; i++) {
        result += String.fromCharCode(this.key ^ hash.charCodeAt(i));
    }

    return result;
};

module.exports = {
    XorEncryption
};