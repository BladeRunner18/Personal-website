
<template>
    <div>
        <top></top>
        <banner></banner>
        <div class="Contain">
            <div class="container">
                <div class="title">
                    <h3>联系方式</h3>
                    <div class="line"></div>
                            <p>本人目前在求职中，希望能找到使用TypeScript+vue的开发环境，或者react/react Native也可以啦，如果您有意向，请直接通过下面的联系方式联系我！</p>
                </div>
                <ul class="clear">
                    <li>
                        <div class="img-box">
                            <img src="../image/contact1.png" alt="">
                        </div>
                        <p>联系电话</p>
                        <p>15056052104</p>
                        <div class="line"></div>
                    </li>
                    <li>
                        <div class="img-box">
                            <img src="../image/contact2.png" alt="">
                        </div>
                        <p>邮箱</p>
                        <p>183279041@qq.com</p>
                        <div class="line"></div>
                    </li>
                     <li>
                        <div class="img-box">
                            <img src="../image/contact2.png" alt="">
                        </div>
                        <p>联系电话</p>
                        <p>15056052104</p>
                                                <div class="line"></div>
                    </li>
                </ul>

                <div class="wx">
                    <img src="../image/wx.jpg" alt="">
                    <p>微信二维码</p>
                </div>
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
.title p{line-height: 30px;font-size: 16px;color: #666666;}
ul li{width: 33.3%;float: left;padding: 0px 50px;text-align: center;box-sizing: border-box;}
ul li p{font-size: 20px;line-height: 30px;}
ul li .line{height: 2px;width: 40px;background: #333333;margin: 20px 0px;display: inline-block;}
.wx{margin: 50px 0px;text-align: center;}
.wx img{width: 450px;}
.wx p{line-height: 45px;height: 45px;background: #3b55e6;color: white;font-size: 18px;font-weight: bold;width: 200px;border-radius: 22.5px; text-align: center;margin: 20px auto;}
@media(max-width: 1198px){
    .title{margin: 20px 0px;width: 100%;}
    ul li{padding: 0px;width: 100%;}

}

</style>
