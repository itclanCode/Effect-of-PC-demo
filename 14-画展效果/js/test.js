;
(function () {
  $(document).ready(function () {
    // 变量
    // 鼠标按下的坐标
    let mouseStartX = 0;
    // 鼠标移动的位移
    let mouseMoveX = 0;
    // 单次 鼠标抬起偏移量
    let endOffsetX = 0;
    // 长廊的总宽度
    let contentWidth = 0;
    // 可视页面宽度
    let pageWidth = $(document).width();

    $('.view_item').each(function (index, item) {
      contentWidth += $(this).outerWidth();
    });
    console.log(contentWidth)
    $('.view').mousedown(function (e) {

      mouseStartX = e.pageX;
      document.onmousemove = function (e) {
        let moveX = e.pageX - mouseStartX
        if (moveX + endOffsetX > 0) {
          mouseMoveX = 0
        } else if ((moveX + endOffsetX) < -contentWidth + pageWidth) {
          mouseMoveX = -contentWidth + pageWidth;
        } else {
          mouseMoveX = moveX + endOffsetX;
        }
        $('.view_item').css({
          transform: 'translate3d('.concat(mouseMoveX, 'px, 0px, 0px'),
        })
        $('.view_item_1 .inner_item_1').css({
          transform: 'translate3d('.concat(mouseMoveX *1.3, 'px, 0px, 0px'),
        })
        $('.view_item_1 .inner_item_2').css({
          transform: 'translate3d('.concat(mouseMoveX * 1.6, 'px, 0px, 0px'),
        })
        $('.view_item_1 .inner_item_3').css({
          transform: 'translate3d('.concat(mouseMoveX * 2.1, 'px, 0px, 0px'),
        })
      }
    })
    $(document).mouseup(function (e) {
      endOffsetX = mouseMoveX;
      this.mouseup = null;
      this.onmousemove = null
    })
  });
})()