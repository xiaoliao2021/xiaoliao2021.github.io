import CryptoJS from "crypto-js";

function formatArr(arr, n) {
  let len = arr.length;
  if (n <= arr.length) {
    return arr.slice(0, n);
  }
  return arr.concat(new Array(n - len).fill(0));
}

function getKeyAES(key) {
  let key_len = 256;
  if (key.length * 8 <= 128) {
    key_len = 128 / 8;
  } else if (key.length * 8 <= 192) {
    key_len = 192 / 8;
  }
  return CryptoJS.enc.Utf8.parse(formatArr(key.split(""), key_len).join(""));
}

function encryptAES(content, key, iv = "") {
  var key_ = getKeyAES(key);
  var iv_ = CryptoJS.enc.Utf8.parse(iv);
  var encrypted = CryptoJS.AES.encrypt(content, key_, {
    iv: iv_,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}
function decryptAES(content, key, iv = "") {
  var key_ = getKeyAES(key);
  var iv_ = CryptoJS.enc.Utf8.parse(iv);
  var decrypted = CryptoJS.AES.decrypt(content, key_, {
    iv: iv_,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}
export { encryptAES, decryptAES };
