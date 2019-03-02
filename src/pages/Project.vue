
<template>
        <div>
            <top></top>
            <banner></banner>
            <div class="Contain project">
                <div class="container">
                        <div class="title">
                                <h3>项目展示</h3>
                                <div class="line"></div>
                                <p>以下是我做过的项目中的一些案例，可以点击直接查看线上的地址。其中我负责的前端页面的编写并结合公司开发的网站后台管理将前台页面和后台、数据库之间绑定，让客户可以简单的维护网站的内容。</p>
                                
                        </div>
                        <ul class="clear">
                                <li v-for="(val,key,index) in proCase">
                                    <div class="img-box">
                                       <img :src="val.imgLink" alt="">
                                       <div class="effect">
                                            <div class="border">
                                                <a :href="val.href" target="blank">查看网址</a>
                                            </div>
                                        </div>
                                    </div> 
                                   <p>{{val.title}}</p>
                                </li>
                        </ul>
                </div>
            </div>
    
            <bottom></bottom>
        </div>    
    </template>
    
    <script>
        import top from '../components/Top'
        import bottom from '../components/Footer'
        import banner from '../components/Banner'
    export default {
        data() {
            return {
                parentBan:'../image/banner.jpg',
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
.project .content .title{font-size: 30px;font-weight: normal;line-height: 50px;color: black;text-align: center;margin: 20px 0px;}
.project ul li{margin-bottom: 40px; width: 31%;margin-right: 3.5%;float: left;position: relative;}
.project ul li:nth-child(3n){margin-right: 0px;}
.project ul li .img-box{position: relative; height: 250px;border: 1px solid #dedede;box-sizing: border-box;overflow: hidden;;}
.project ul li .img-box img{width: 100%;height: 250px;;}
.project ul li .effect{padding: 20px;box-sizing: border-box;opacity: 0; transition: all 0.5s ease; position: absolute;left: 0px;right: 0px;top: 0px;bottom: 0px;background: rgba(59, 85, 230, 0.8);}
.project ul li .effect .border{display: flex;align-items: center;justify-content: center; transition: all 0.5s ease;position: relative; height: 100%;width: 100%;}
.project ul li .effect .border a{display: inline-block;height: 35px;background: white;color: #3b55e6;width: 120px;text-align: center;line-height: 35px;;}

.project .moreBtn{border-color: #3b55e6;color: #3b55e6;}
.project .moreBtn:hover{background: #3b55e6;color: white;}


.project ul li:hover .effect{opacity: 1;}
.project ul li:hover .img-box img{transform: scale(1.2);}
.project ul li p{font-size: 18px;font-weight: bold;line-height: 40px;text-align: center;margin: 20px 0px;}
@media(max-width:1198px){
    .project ul li {width: 100%;height: auto;margin: 10px 0px;}
    .title{margin: 20px 0px;width: 100%;}
}

    </style>
    