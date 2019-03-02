<template>
    <div>
          <top></top>
          <banner></banner>

          <div class="Contain">
              <div class="container">
                    <div class="title">
                        <h3>个人介绍</h3>
                        <div class="line"></div>
                       <p>我目前从事前端开发一年多，有着很强的学历能力和学习欲望，自己写过js插件，目前放在GitHub上，虽然没有star，但是对于目前的工作上还是有很多帮助。
                           <p>喜欢阅读源码，曾因惊叹于jquery的简洁方便而拜读过源码，虽然没有读完但也感觉收益颇多。</p>
                       <p> 未来，我还是会保持着学习的精神，毕竟前端更新如此之快，只有不断学习才能写出更出色的代码。</p>
                      
                   </div>
                   <ul class="clear">
                       <li>
                           <i></i>
                            <h4>2017</h4>
                           <h3>合肥爱秀么网络有限公司</h3>
                           <div class="line"></div>
                           <p>在这个公司主要负责页面设计和静态页面编写的职务，因为是小的外包公司，所以做的比较杂，大多数是做页面设计</p>
                           <div class="img-box"><img src="../image/about1.jpg" alt=""></div>
                       </li>
                       <li>
                           <i></i>
                            <h4>2018</h4>
                           <h3>合肥万户网络科技有限公司</h3>
                                                      <div class="line"></div>
                           <p>公司致力于开发企业官网，商城平台及政府网站，后也涉及小程序及公众号平台的开发。
                               <br>
                               目前主要使用以.net/c#等开发语言为企业制作网站。公司在同行业中属于高端网站制作公司，我在公司中主要负责前端代码编写，以及简单的企业平台后台程序开发和日常维护。</p>
                           <div class="img-box"><img src="../image/about2.jpg" alt=""></div>
                       </li>
                       <li>
                           <i></i>
                            <h4>2019</h4>
                           <h3>待续....</h3>
                           <p></p>
                            <div class="line"></div>
                           <div class="img-box"><img src="../image/about4.jpg" alt=""></div>
                       </li>
                   </ul>
                   <div class="furture">未来展望</div>
                   <div class="cont clear">
                       <div class="left">
                           <div class="img-box"><img src="../image/about3.jpg" alt=""></div>
                       </div>
                       <div class="right">
                           <p>未来我希望可以在工作中学到更多知识，并且利用工作之余掌握一门后端语言，了解整个全栈开发的设计到细节开发，目标是web全栈开发工程师。</p>
                       </div>
                   </div>
              </div>
          </div>

          <bottom></bottom>
    </div>
</template>

<script>
    import bottom from '../components/Footer'
    import banner from '../components/Banner'
    import top from '../components/Top'
export default {
    data() {
        return {
            parentBan:'../image/banner.jpg',
        }
    },
    components:{
        top,
        bottom,
        banner,
    }
}
</script>

<style scoped>

.title{margin:80px auto;text-align: center;width: 80%;}
.title h3{font-size: 24px;color: #333333;line-height: 40px;margin: 10px 0px;}
.title .line{width: 40px;height: 4px;background: #3b55e6;margin: 20px auto;}
.title p{line-height: 30px;font-size: 16px;color: #666666;margin-bottom: 20px;}
ul{background: url(../image/line.jpg)center repeat-y;padding: 50px 0px;}
ul li{width: 50%;padding: 0px 60px;box-sizing: border-box;position: relative;}
ul li h3{font-size: 24px;color: #333333;line-height: 40px;}
ul li .line{height: 1px;margin: 15px 0px;background: #c1c1c1;}
ul li p{font-size: 18px;line-height: 30px;color: #666666;margin-bottom: 20px;}
ul li h4{font-size: 36px;color: #3b55e6;font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;line-height: 50px;}
ul li .img-box{line-height: 0px; height: 280px;overflow: hidden; width: 100%;background: #3b55e6;}
ul li:nth-child(odd){float: left;}
ul li:nth-child(even){margin-top: 300px; float: right;}
ul li:nth-child(3){margin-top: 200px;}
ul li i{width: 24px;height: 24px;background: url(../image/dot.png)center no-repeat;position: absolute;}
ul li:nth-child(odd) i{right: -12px;}
ul li:nth-child(even) i{left: -12px;}
ul li:hover img{transform: scale(1.2);}
.furture{margin: 80px auto 30px auto; height: 50px;width: 220px;text-align: center;line-height: 50px;color: white;font-weight: bold;background: #3b55e6;border-radius: 25px;font-size: 20px;}
.cont .left{float: left;width: 40%;padding-right: 60px;height: 400px;box-sizing: border-box;}
.cont .left .img-box{line-height: 0px; height: 400px;width: 100%;background: #3b55e6;}
.cont .right{float: left;width: 50%;height: 400px;box-sizing: border-box;;}
.cont .right p{line-height: 30px;font-size: 18px;margin-bottom: 20px;letter-spacing: 1px;}
.cont{margin-bottom: 50px;}
@media(max-width:1198px){
    .title{width: 100%;margin: 20px 0px;}
    ul li{width: 100% !important; float: none !important; margin: 20px 0px !important;padding: 0px !important;}
    ul li .img-box{height: auto;}
    ul li i{display: none;}
    ul{background: none;padding: 20px 0px;}
    .cont .left,.cont .right{width: 100%;float: none;margin: 10px 0px;height: auto;padding: 0px;}
    .cont .left .img-box{height: auto;margin: 0ox auto;}
}

</style>
