### 点击图片随机切换

效果如下所示:

![点击图片实现随机切换效果](images/点击图片切换图片地止.gif)

布局:

图片水平居中即可

html代码

    <div id="wrap">
       <img src="images/1.jpg" alt="" width="100%" height="100%">
    </div>
css代码

```
*
{
    margin: 0;
    padding: 0;
}#wrap
{
    width: 420px;
    height: 531px;
    margin: auto;

    cursor: pointer;;
    text-align: center;

    border: 1px solid #000;
}
```

js代码

```
<script>
    	    var index = 0;      // 定义一个索引初始值
    	    var oWrap = document.getElementById('wrap');
    	    var timer = null;   // 定义一个定时器
    	    var onOff = true;   // 开关按钮
    	    play();
            function play(){
            	 timer = setInterval(function(){
                    index++;
                    if(index>10){
                       index = 1;
                    }
                    document.querySelector("img").src="images/"+index+".jpg"
    	         },100);
            }
            // 事件操作
            oWrap.onclick = function(){
            	if(onOff){
                   clearInterval(timer); // 清除定时器
            	}else{
                   play();
            	}
            	onOff = !onOff;
            }
    </script>
```

分析:

图片在不停的切换,需要一个动态的索引值,定时器,一个动作控制两种状态,需要一个开关按钮,定时器的使用,以及最后当中onOff = !onOff,两种状态的切换

