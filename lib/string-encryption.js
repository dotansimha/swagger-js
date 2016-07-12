module.exports = function (obj, toEncrypted) {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] == "object") {
        var t = obj[property];

        if (t.originalValue && t.encryptedValue) {
          obj[property] = toEncrypted ? t.encryptedValue : t.originalValue;
        }
        else {
          getActualObjectWithEncryption(obj[property], toEncrypted);
        }
      }
    }
  }
}
