<template>
    <div class="Top topper">
       <div class="container clear">
           <div class="photo">
               <img src="../image/img3.jpg" alt="">
               <h3>魏明</h3>
           </div>
           <nav>
               <ul>
                    <li><router-link to='/index' class="p2">首页</router-link><i></i></li>
                   <li><router-link to='/about' class="p3">个人介绍</router-link><i></i></li>
                   <li><router-link to='/project' class="p3">项目展示</router-link><i></i></li>
                   <div class="contact"><router-link  to="/contact">联系我</router-link></div>
               </ul>
           </nav>
           <div class="navBtn" v-on:click='showNav()'></div>
           <div class="phoneNav" id="phoneNav">
               <div class="close" v-on:click='hideNav()'></div>
               <dl>
                   <dd><router-link to='/index'>首页</router-link></dd>
                   <dd><router-link to='/about'>个人介绍</router-link></dd>
                   <dd><router-link to='/project'>项目展示</router-link></dd>
                   <dd><router-link  to="/contact">联系我</router-link></dd>
               </dl>
           </div>
       </div>
   </div>
</template>

<script>
    import $ from 'jquery';
export default {
    data() {
        return {
            
        }
    },
    mounted() {
       
    },
    methods:{
        showNav:function(){
            document.getElementById('phoneNav').style.right = '0px';
        },
        hideNav:function(){
            document.getElementById('phoneNav').style.right = '-200px';
        }
    }
}
</script>

<style lang='scss' scoped>
.Top{
   height: 100px;background: rgba(0, 0, 0, 0.7);
   position: absolute;;
   top: 0px;
   left: 0px;
   right: 0px;
   transition: all 0.5s ease;
   z-index: 10;
}
.Top .photo{float: left;}
.Top .photo img{transition: all 0.5s ease; vertical-align: middle; width: 80px;height: 80px;border-radius: 50%;background: pink;;}
.Top .photo h3{margin-left: 15px; font-size: 24px;font-weight: bold;color: white;line-height: 100px;letter-spacing: 20px;display: inline-block;vertical-align: middle;}
.Top nav{float: right;}
.Top nav ul li{position: relative; font-size: 16px;color: white; display: inline-block;margin: 0px 15px;line-height: 100px;}
.Top nav ul li a{display:block;transition: all 0.5s ease;opacity: .7;}
.Top nav ul li i{transition: all 0.5s ease; height: 1.5px; position: absolute;width: 0px;right: 0px;bottom: 30px;display:block;background: white;}
.Top nav ul li:hover i{width: 100%;}
.Top nav ul li:hover a{opacity: 1;}
.Top nav ul .contact{margin-left: 10px; background: #3b55e6;font-size: 16px; display: inline-block;height: 40px;width: 140px;text-align: center;border-radius: 20px;line-height: 40px;color: white;;}
.topper{height: 60px;position: fixed;;}
.topper .photo img{height: 50px;width: 50px;;}
.topper .photo h3{line-height: 60px;}
.topper nav ul li{line-height: 60px;}
.topper nav ul li i{bottom: 10px;}
.navBtn{display:none;position: absolute;width: 30px;height: 30px;background:url(../image/menu.png)center no-repeat;right: 10px;top: 15px;;}
.phoneNav{display: none;}
.phoneNav{padding-top: 100px;box-sizing: border-box; position: fixed;transition: all 0.5s ease-in;top:0px;right: -200px;bottom: 0px; width: 200px;background: rgba(0, 0, 0, 0.8);color: white;z-index: 100;}
.phoneNav dd{margin-bottom: 20px; line-height: 50px;text-align:center;position: relative;}
.phoneNav dd::after{content: '';display: block;background: white;width: 20px;height: 1px;position: absolute;bottom: -10px;left: 50%;transform: translateX(-50%);}
.phoneNav .close{position: absolute;right: 20px;top: 20px;width: 30px;height: 30px;background: url(../image/close.png) center no-repeat;}
@media(max-width:1198px){
    .phoneNav{display: block;}
   .Top .photo{float: none;}
   .Top nav{display: none;}
   .Top{width: 100%;}
   .navBtn{display:block;}
}

</style>
