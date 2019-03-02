<template>
   <div>
       <top></top>
       <div class="Contain" id="fullpage">
       <div class="page1 section" id="page1">
            <div id="effect">
                    <div class="layer" data-depth='0.4'><img src="../image/effect1.jpg" alt=""></div>
                    <div class="layer" data-depth='0.6'><img src="../image/effect3.png" alt=""></div>
                    <div class="layer" data-depth='0.2'>
                            <div class="cont">
                                <h4>前端开发工程师</h4>
                                <h3>做一个很棒的网站</h3>
                                <p>做一个好看又实用的网站。网站如今已然成为各企业，平台，甚至个人去展现给用户在互联网上更直观的体验。
                                    <br> 在当今前端技术快速更新中，保持不断的学习与提升，在代码中飞驰，给用户更愉悦的浏览体验。</p>
                                <div class="btn">
                                    <router-link to="/project">了解项目经历</router-link>
                                </div>
                            </div>
                    </div>
            </div>
       </div>

       <div class="page2 section" id="page2">
           <div class="container">
               <div class="content">
                   <div class="title">了解我的技术栈</div>
                   <ul class="clear">
                       <li v-for='(value,key,index) in skill'>
                            <div class="icon">
                                    <img :src="value.icon1" alt="" class="img1">
                                    <img :src="value.icon2" alt="" class="img2">
                            </div>
                            <h3>{{value.title}}</h3>
                            <p>{{value.intro}}</p>
                       </li>
                   </ul>
               </div>
           </div>
       </div>

       <div class="page3 section" id="page3">
           <div class="container">
               <div class="left">
                   <h3>个人介绍</h3>
                   <div class="line"></div>
                   <p>我目前从事前端开发一年多，有着很强的学历能力和学习欲望，自己写过js插件，目前放在GitHub上，虽然没有star，但是对于目前的工作上还是有很多帮助。
                       <br>
                       喜欢阅读源码，曾因惊叹于jquery的简洁方便而拜读过源码，虽然没有读完但也感觉收益颇多。
                       <br>
                       未来，我还是会保持着学习的精神，毕竟前端更新如此之快，只有不断学习才能写出更出色的代码。
                   </p>
                   <router-link to="/about" class="moreBtn">查看更多</router-link>
               </div>
               <div class="right">
                   <img src="../image/img1.jpg" alt="">
               </div>
               <div class="clear"></div>
               <div class="fl-box">
                    <div class="tit">
                        <h3>工作经历</h3>
                        <div class="line"></div>
                    </div>
                    <div class="msg">
                        <h3>合肥万户网络科技有限公司</h3>
                        <div class="border">
                            <p>2018年8月 ，我就职于广州万户网络有限公司合肥分公司，公司致力于开发企业官网，商城平台及政府网站，后也涉及小程序及公众号平台的开发。目前主要使用以.net/c#等开发语言为企业制作网站。公司在同行业中属于高端网站制作公司，现准备转型到小程序及公众号开发。我在公司中主要负责页面切图，采用DIV+CSS前端代码编写，以及简单的企业平台后台程序开发和日常维护。</p>
                            <h4>目前就职于</h4>
                        </div>
                        <p>负责：将设计稿编写为网页 &nbsp;&nbsp;   | &nbsp;&nbsp;   简单的后台程序开发 &nbsp;&nbsp;  |  &nbsp;&nbsp;  网站的维护</p>
                    </div>
            </div>
           </div>
       </div>

       <div class="page4 section" id="page4">
           <div class="container">
                
                <div class="content">
                        <div class="title">我的项目经历</div>
                        <ul class="clear">
                            <li v-for="(val,index) in proCase" v-if="index < 6" >
                                <div class="img-box">
                                   <img :src="val.imgLink" alt="">
                                   <div class="effect">
                                        <div class="border">
                                            <i class="i1"></i>
                                            <i class="i2"></i>
                                            <i class="i3"></i>
                                            <i class="i4"></i>
                                            <a :href="val.href" target="blank">查看网址</a>
                                        </div>
                                    </div>
                                </div> 
                               <p>{{val.title}}</p>
                            </li>
                        </ul>
                        <div style="text-align: center">
                                <router-link to="/Project" class="moreBtn">查看更多</router-link>
                        </div>
                </div>
           </div>
       </div>
    </div>
   </div>    
</template>

<script>

import top from '../components/Top'
import bottom from '../components/Footer'
import Parallax from 'parallax-js'
import Fullpage from 'fullpage.js'
export default {
    data(){
        return {
            proCase:[
                {
                    imgLink:require('../image/img4.jpg'),
                    title:'安徽丰乐香料有限公司',
                    href:'http://www.fengleperfume.com/index.aspx',
                },
                {
                    imgLink:require('../image/img5.jpg'),
                    title:'深圳繁花音乐文化有限公司',
                    href:'http://www.funhua.net',
                },
                 {
                    imgLink:require('../image/img6.jpg'),
                    title:'木林森照明',
                    href:'http://www.zsmlszm.com',
                },
                 {
                    imgLink:require('../image/img10.jpg'),
                    title:'杭州美创科技有限公司',
                    href:'http://www.mchz.com.cn/',
                },
                 {
                    imgLink:require('../image/img8.jpg'),
                    title:'深圳市元创时代科技有限公司',
                    href:'http://www.oricogroup.com/',
                },
                 {
                    imgLink:require('../image/img9.jpg'),
                    title:'广州越秀物业发展有限公司',
                    href:'http://www.yuexiuservices.yuexiuproperty.com/',
                },
                {
                    imgLink:require('../image/img2.jpg'),
                    title:'武汉寸草春晖教育科技有限公司',
                    href:'http://www.ccchjy.com',
                },
                {
                    imgLink:require('../image/img7.jpg'),
                    title:'合肥哈工机器人有限公司',
                    href:'http://www.hfhgrobot.com',
                },
            ],
            skill:[
                {
                    icon1:require('../image/li1.png'),
                    icon2:require('../image/li1-on.png'),
                    title:"HTML",
                    intro:"精通HTML和HTML5的新特性快速写出网站架构",
                },
                {
                    icon1:require('../image/li2.png'),
                    icon2:require('../image/li2-on.png'),
                    title:"CSS/SCSS",
                    intro:"熟练掌握css3动画，并且曾使用过scss开发项目，精通flex布局盒子模型",
                },
                {
                    icon1:require('../image/li3.png'),
                    icon2:require('../image/li3-on.png'),
                    title:"Javascript/ES6",
                    intro:"精通Javascript语言，可以根据开发需求自己开发js库，对ES6语法有过了解",
                },
                {
                    icon1:require('../image/li4.png'),
                    icon2:require('../image/li4-on.png'),
                    title:"Vue",
                    intro:"会使用vue/vue-cli/webpack/vuex开发项目",
                },
                {
                    icon1:require('../image/li5.png'),
                    icon2:require('../image/li5-on.png'),
                    title:"Node.js",
                    intro:"对node.js有过了解，掌握一些服务器端的基础知识",
                },
                {
                    icon1:require('../image/li6.png'),
                    icon2:require('../image/li6-on.png'),
                    title:"Others",
                    intro:"使用过jquery/swiper/Echarts/bootstrap等js库",
                },
            ],
            pageMsg1:{
                job:'前端开发工程师',
                title:'做一个很棒得网站',
                intro:'我们把它做得既漂亮又简单。用丰富的交互效果，给浏览者一种愉悦的浏览体验。并且保持不断的学习和提升，在更新飞快的前端开发技术中'
            },
            pageMsg3:{
                intro:"个人介绍我出生于1995年，老家安徽合肥，是一个乐观开朗热爱生活的人。<br> 我从事编程有一年的时间，以前做过设计，因为对编程有强烈的爱好所以选择从事前端开发，把工作当作爱好，乐在其中，喜欢学习新的技术，并且也一直在不断的学习中，学习能力很强、与同事之间的关系处理的很融洽是我的优点。<br>我从事编程有一年的时间，以前做过设计，因为对编程有强烈的爱好所以选择从事前端开发，把工作当作爱好"
            },
        }
    },
    components:{
        top,
        bottom,
    },
    mounted(){
        if(window.screen.width > 1200){
            this.full = new Fullpage(document.getElementById('fullpage'),{
                licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
             });
        }
        else{
            document.getElementById('page1').style.height = window.screen.height + 'px';
        }
        new Parallax(document.getElementById('effect'));
    },
    beforeDestroy() {
        this.full.destroy('all');
    },
}
   
</script>

<style>


.section .fp-tableCell{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
}
.page1{ color: white;background: black;width: 100%;overflow: hidden;}
.page1 .layer{width: 100%;height: 100%;;}
.page1 .cont{text-align: center;width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;flex-direction: column;}
.page1 .cont h4{font-weight: normal; font-size: 28px;line-height: 50px;text-align: center;margin-bottom: 70px;}
.page1 .cont h3{letter-spacing: 10px; font-size: 55px;line-height: 80px;text-align: center;}
.page1 .cont p{font-size: 16px;color: #e6e6e6;line-height: 35px;}
.page1 .cont .btn a{font-size: 16px; overflow: hidden; position: relative; box-sizing: border-box; display: inline-block;margin: 0px 10px;color: white;height: 50px;line-height: 48px;font-size: 14px;transition: all 0.5s ease;border-radius: 25px;;}
.page1 .cont .btn a{border:1px solid transparent;background: #f42267; padding: 0px 70px;}
.page1 .cont .btn{margin: 30px 0px;}
.page1 .cont .btn a:hover{background: white;color: #f42267;}
#effect{pointer-events: inherit !important;}
@media(max-width:1550px){
        .page1 .cont h3{font-size: 36px;line-height: 60px;}
        .page1 .cont h4{font-size: 24px;line-height: 40px;}
}
@media(max-width:768px){
    .page1{width: 100%;height: 100%;}
    .page1 .cont{padding: 0px 30px;box-sizing: border-box;}
    .page1 .cont h4{font-size: 18px;line-height: 30px;margin-bottom: 20px;}
    .page1 .cont h3{font-size: 30px;line-height: 50px;letter-spacing: 2px;}
    .page1 .cont p{font-size: 14px;line-height: 30px;}
    .page1 .cont .btn a:nth-child(1){padding: 0px 30px;height: 40px;line-height: 40px;;}
    .page1 .cont .btn a:nth-child(2){padding: 0px 30px;line-height: 40px;height: 40px;;}
    .page1 .layer{bottom: 0px;right: 0px;}
    #effect{width: 100%;height: 100%;}
    #effect img{width: 100%;height: 100%;max-width: inherit;}
}

.fl-box{width: 1000px;margin: 30px auto;}
.fl-box .tit{padding: 0px 50px;box-sizing: border-box; height: 70px;line-height: 70px;color: white;background: rgba(255, 255, 255, 0.3);}
.fl-box .tit h3{font-size: 20px; font-weight: normal;display: inline-block;vertical-align: middle;}
.fl-box .tit .line{height: 1px;background: white;width: 80%;display: inline-block;vertical-align: middle;margin-left: 70px;}
.fl-box .msg{background: white; box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);padding: 20px 50px;}
.fl-box .msg h3{color: #333333;}
.fl-box .border{margin: 20px 0px; border: 1px solid #f5f5f5;border-radius: 10px;padding: 20px;}
.fl-box .border p{color: #999999;line-height: 30px; display: inline-block;width: 78%;vertical-align: middle;}
.fl-box .border h4{font-weight: normal; margin-left: 3%; border-radius: 30px; display: inline-block;width: 15%;vertical-align: middle;text-align: center;color: white;line-height: 60px;background: #f42267;}
.fl-box .msg>p{line-height: 30px;color: #3b55e6;}

.page2 .content .title{font-size: 30px;font-weight: normal;line-height: 50px;color: black;text-align: center;margin: 20px 0px;}
.page2 ul li{transition: all 0.5s ease; padding: 70px;box-sizing: border-box; height: 320px;flex-direction:column; display:flex;align-items: center;justify-content: center;text-align: center; width: 33.3%;float: left;box-sizing: border-box;}
.page2 ul li:nth-child(1){border-right: 1px solid #e8e9ea;border-bottom:  1px solid #e8e9ea;}
.page2 ul li:nth-child(2){border-right: 1px solid #e8e9ea;border-bottom:  1px solid #e8e9ea;}
.page2 ul li:nth-child(3){border-bottom:  1px solid #e8e9ea;}
.page2 ul li:nth-child(4){border-right: 1px solid #e8e9ea;}
.page2 ul li:nth-child(5){border-right: 1px solid #e8e9ea;}
.page2 ul li .icon{width: 90px;height: 90px;position: relative;;}
.page2 ul li .icon .img2,.page2 ul li .icon .img1{width: 90px;height: 90px;; transition: all 0.5s ease; position: absolute;left: 0px;right: 0px;bottom: 0px;top: 0px;}
.page2 ul li .icon .img2{opacity: 0;}
.page2 ul li:hover .icon .img2{opacity: 1;}
.page2 ul li:hover .icon .img1{opacity: 0;;}
.page2 ul li h3{line-height: 40px;}
.page2 ul li p{line-height: 24px;color: #888888;}
.page2 ul li:hover h3{color: #3b55e6;}
.page2 ul li:hover p{color: #3b55e6;}
.page2 ul li:hover{box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);}
.page2 ul{margin-bottom: 30px;}

.page3{height: 600px;padding: 50px 0px;box-sizing: border-box;background: #3b55e6;color: white;}
.page3 .left{width: 650px;float: left;padding-right: 50px;box-sizing: border-box;}
.page3 .right{line-height: 0px; overflow: hidden; width: 550px;height: 350px;; float: right;box-sizing: border-box; border: 10px solid white;border-radius: 10px;}
.page3 .right img{width: 100%;height: 350px;;}
.page3 .left h3{line-height: 40px;font-size: 24px;}
.page3 .left .line{width: 50px;height: 5px;background: white;margin: 20px 0px;;}
.page3 .left p{margin-bottom: 15px; line-height: 30px;font-size: 16px;}
.moreBtn {transition: all 0.5s ease; display: inline-block;height: 40px;padding: 0px 50px;border-radius: 20px;line-height: 38px;color: white;border: 1px solid white;text-align: center;margin: 20px 0px;;}
.moreBtn:hover{background: white;color: #3b55e6;border-color: white;}

.page4 .content .title{font-size: 30px;font-weight: normal;line-height: 50px;color: black;text-align: center;margin: 20px 0px;}
.page4 ul li{margin-bottom: 20px; width: 31%;margin-right: 3.5%;float: left;position: relative;}
.page4 ul li:nth-child(3n){margin-right: 0px;}
.page4 ul li .img-box{position: relative; height: 250px;border: 1px solid #dedede;box-sizing: border-box;overflow: hidden;;}
.page4 ul li .img-box img{width: 100%;height: 250px;;}
.page4 ul li .effect{padding: 20px;box-sizing: border-box;opacity: 0; transition: all 0.5s ease; position: absolute;left: 0px;right: 0px;top: 0px;bottom: 0px;background: rgba(59, 85, 230, 0.8);}
.page4 ul li .effect .border{display: flex;align-items: center;justify-content: center; transition: all 0.5s ease;position: relative; height: 100%;width: 100%;}
.page4 ul li .effect .border a{display: inline-block;height: 35px;background: white;color: #3b55e6;width: 120px;text-align: center;line-height: 35px;;}
.page4 ul li .effect .border .i1{transition: all 0.5s ease; position: absolute;top: 0px;height: 1px;left: 0px;width: 0px;background: white;;}
.page4 ul li .effect .border .i2{transition: all 0.5s ease; position: absolute;top: 0px;height: 0px;right: 0px; width: 1px;background: white;;}
.page4 ul li .effect .border .i3{transition: all 0.5s ease; position: absolute;bottom: 0px;height: 1px;right: 0px;width: 0px;background: white;;}
.page4 ul li .effect .border .i4{transition: all 0.5s ease; position: absolute;bottom: 0px;height: 0px;left:0px ;width: 1px;background: white;;}
.page4 .moreBtn{border-color: #3b55e6;color: #3b55e6;}
.page4 .moreBtn:hover{background: #3b55e6;color: white;}


.page4 ul li:hover .effect{opacity: 1;}
.page4 ul li:hover .effect .i1,.page4 ul li:hover .effect .i3{width: 100%;}
.page4 ul li:hover .img-box img{transform: scale(1.2);}
.page4 ul li:hover .effect .i2,.page4 ul li:hover .effect .i4{height:100%;}
.page4 ul li p{font-size: 18px;font-weight: bold;line-height: 40px;text-align: center;margin: 20px 0px;}
@media(max-width:1550px){
    .page2 ul li{height: 280px;padding: 40px;overflow: hidden;}
    .page4 ul li{height: auto;}
    .page4 ul li:nth-child(n+4){display:none;}
    .page3 .fl-box{display:none;}
}
@media(max-width:1400px){
    .page2 ul li{height: 240px;padding: 20px;}
}
@media(max-width:1299px){
    .page2 ul li{height: 200px;padding: 10px;}
}


@media(max-width:1198px){
.fl-box{width:100%;margin-top: 10px;}   
.fl-box .tit{background: rgba(59, 85, 230, 0.5);height: 60px;line-height: 60px;padding: 0px 10px;;}
.fl-box .msg p{width: 100%;float: none;}
.fl-box .msg h4{float: none;width: 120px;line-height: 40px;height: 40px;margin: 10px 0px;;}
.fl-box .border{padding: 10px;}
.page3 .left,.page3 .right{width: 100%;float: none;height: auto;}
.page3 .right img{height: auto;}
.fl-box .msg{padding: 10px;}
.page2 ul li{height: auto; width: 100% !important;float: none !important;border-right: 0px !important; border-bottom: 1px solid #e8e9ea !important;padding: 20px;height: auto;}
.page3{padding: 20px 0px;height: auto;}
.page3 .left{padding-right: 0px;}
.page4 ul li{height:auto; width: 100%;margin: 10px 0px !important;float: none;}
.page4 ul li .img-box{height: auto;}
}

</style>
