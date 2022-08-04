window.onload = function () {
  let reg =
    /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
  let tel = document.querySelector("#tel");
  tel.addEventListener("blur", function () {
    if (reg.test(this.value)) {
      this.nextElementSibling.className = "right";
      this.nextElementSibling.innerHTML = "输入正确";
    } else {
      this.nextElementSibling.className = "error";
      this.nextElementSibling.innerHTML = "输入错误";
    }
  });
};
