// https://github.com/lxhyl/lxhyl.github.io/tree/master/components/backToTop
const node = document.createElement('div')
node.innerHTML = `<div class="lxhyl-to-top init-hide"
style="position: fixed; width: 40px; height: 40px; background: #0086b5; cursor: pointer; z-index: 1; bottom: 52px; right: 25px; border-radius: 10px; display: block;">
<div class="goup-arrow"
  style="width: 0px; height: 0px; margin: 0px auto; padding-top: 13px; border-style: solid; border-width: 0px 10px 10px; border-color: transparent transparent rgb(255, 255, 255);">
</div>
</div>`  

document.body.appendChild(node)
const lxhylToTop = document.getElementsByClassName('lxhyl-to-top')[0];
const hideShow = () => {
  const top = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop)
  if (top > 400) {
    lxhylToTop.className = 'lxhyl-to-top show'
  } else {
    lxhylToTop.className = 'lxhyl-to-top hide'
  }
}
// 节流
let tempTimer = null
let v = 200
window.onscroll = function () {
  if (tempTimer) {
    clearTimeout(tempTimer)
    tempTimer = null
  }
  tempTimer = setTimeout(hideShow, 50)
}

let timer;
lxhylToTop.onclick = function () {
  cancelAnimationFrame(timer);
  timer = requestAnimationFrame(function fn() {
    const oTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (oTop > 0) {
      v += 50
      document.body.scrollTop = document.documentElement.scrollTop = oTop - v;
      timer = requestAnimationFrame(fn);
    } else {
      cancelAnimationFrame(timer);
      v = 200
    }
  });
}

// 已用 Vimium 取代该功能
// // 快捷键 `G + G` 来自 New Bing
// let lastPress = 0;
// // 监听keypress事件
// document.addEventListener("keypress", function(event) {
//   // 如果按的是g键
//   if (event.key === "g") {
//     // 获取当前时间
//     let now = Date.now();
//     // 如果当前时间和上一次按g键的时间差小于500毫秒，就认为是连续按了两次
//     if (now - lastPress < 500) {
//       lxhylToTop.onclick();
//     }
//     // 更新上一次按g键的时间
//     lastPress = now;
//   }
// });