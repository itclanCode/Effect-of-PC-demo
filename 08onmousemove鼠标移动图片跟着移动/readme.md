### 鼠标移动图片跟着移动效果

![鼠标移动图片跟着移动](img/鼠标移动图片跟着移动.gif)

布局:

```
<div id="wrap">
       <div class="font"></div>
       <div class="person"></div>
       <div class="spring"></div>
</div>
```

css代码

```
*
{
    margin: 0;
    padding: 0;
}
body
{
    overflow-x: hidden;

    background: url('../img/bg.jpg') no-repeat center center/100% 100%;
}
#wrap
{
    position: relative;

    height: 915px;
    & > div
    {
        position: absolute;
    }
    .font
    {
        top: 20px;

        width: 621px;
        height: 202px;

        background: url('../img/font.png');
    }
    .person
    {
        top: 50px;

        width: 900px;
        height: 800px;

        background: url('../img/person.png');
    }
    .spring
    {
        top: 300px;

        width: 934px;
        height: 536px;

        background: url('../img/spring.png');
    }
}
```

js代码

```
<script>
    var oWrap = document.querySelector("#wrap");  // 获取wrap元素,注意前面带#号
    var aDiv = document.querySelectorAll("div"); // 获取div元素,群组元素
    move();
    window.onresize = function() {  // 窗口发生改变时
        move();
    }

    function move() {
        var arr = []; // 用一数组存储居中位置
        var arrs = [0.04, 0.08, 0.06]; // 移动的系数
        for (var i = 0; i < aDiv.length; i++) { // 循环长度
            arr.push((oWrap.offsetWidth - aDiv[i].offsetWidth) / 2);
            aDiv[i].style.left = arr[i] + 'px';
        }
        oWrap.onmousemove = function(e) { // 鼠标移动
        	console.log("鼠标移动");
            var e = e || event;
            for (var i = 0; i < aDiv.length; i++) {
                aDiv[i].style.left = e.clientX * arrs[i] + arr[i] + 'px';
            }
        }
    }
    </script>
```

分析:获取元素,注意h5新增的获取元素的两个方法

效果分析:鼠标移动,onmousemove事件,页面中的元素跟着移动,页面上的能动的元素是绝对定位,移动的幅度没有那么大,需要一个系数,幅度参数,先让元素如何居中,可用js控制,也可以用css控制,用一数组存储元素的居中位置

2. 找准对象,谁赋值谁,鼠标的位置距离x轴的左边的距离赋值给div元素的left值