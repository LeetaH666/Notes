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
