Date.prototype.format = function (fmt) {
  let ret;
  const opt = {
    "Y+": this.getFullYear().toString(), // 年
    "m+": (this.getMonth() + 1).toString(), // 月
    "d+": this.getDate().toString(), // 日
    "H+": this.getHours().toString(), // 时
    "M+": this.getMinutes().toString(), // 分
    "S+": this.getSeconds().toString() // 秒
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}