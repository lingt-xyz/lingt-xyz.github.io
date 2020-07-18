---
title: "墨"
---
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="/assets/css/main.css">
    <style>
        section {
            text-decoration: underline;
            writing-mode: vertical-rl;
        }
        ol {
            writing-mode: vertical-rl;
        }
        li::marker {
            text-combine-upright: all;
        }
    </style>
    <title>{{site.title}}</title>
</head>

<body>
  <div class="container d-flex w-100 h-100 mx-auto flex-column">
    {% include header.html %}

    <main role="main" class="cover">
        <section>
            <canvas id="myCanvas">Your browser does not support the HTML5 canvas tag.</canvas>
        </section>
    </main>

    {% include footer.html %}
  </div>
<script>
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    //注意不要使用css给canvas设定宽高
    canvas.setAttribute('width', '500');
    canvas.setAttribute('height', '500');

    var pie = {
        count: 185,
        rotation: 0,
        //可以自己尝试弄一个比较舒服的速度
        speed: 0.05,
        draw: function () {
            //每次旋转后将新画的图像画在原来的图像之上
            ctx.globalCompositeOperation = 'source-over';
            //保存一下状态
            ctx.save();
            //将圆心移动到canvas中心
            ctx.translate(250, 250);
            ctx.rotate(this.rotation);
            var i = this.count;
            while (i--) {
                ctx.beginPath();
                //实际就是画一堆同心圆，弧度在0-Math.PI/3间随机，为了更好的效果，起点和终点也都在小范围内随机了一下
                ctx.arc(0, 0, i + (Math.random() * 35), Math.random(), Math.PI / 3 + (Math.random() / 12));
                ctx.stroke();
            }
            ctx.restore();
        },
        loop: function () {
            //requestAnimationFrame执行的时候，this会变为windows，所以先保存一下。
            var _this = pie;
            requestAnimationFrame(_this.loop);

            ctx.globalCompositeOperation = 'destination-out';
            //填充的白色给一个透明度，这样才有小尾巴哟
            ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
            ctx.fillRect(0, 0, 500, 500);

            //每次循环以后 旋转的角度加1
            _this.rotation += _this.speed;

            _this.draw();
        }
    }
    pie.loop();
</script>
  {% include js.html %}
</body>
</html>