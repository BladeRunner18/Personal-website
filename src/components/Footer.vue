<template>
    <div>
        <footer>
            <div class="container">
                <div class="left">
                    <p>感谢您的观看</p>
                </div>
                <div class="right">
                    <p>15056052104 &nbsp;&nbsp;&nbsp;&nbsp; |</p>
                    <p>183279041@qq.com</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>

footer{height: 100px;background: #222328;line-height: 100px;color: #c2c2c2;}
footer .left{float: left;}
footer .left{font-size: 18px;font-weight: bold;}
footer .right{float: right;}
footer .right p{font-size: 16px;display: inline-block;margin-left: 20px;padding-left: 30px;box-sizing: border-box;}
footer .right p:nth-child(1){background: url(../image/icon1.png)left center no-repeat;}
footer .right p:nth-child(2){background: url(../image/icon2.png)left center no-repeat;}
@media(max-width:768px){
    footer .left{float: none;line-height: 30px;}
    footer .right{float: none;line-height: 30px;}
    footer{height: auto;padding: 10px 10px;}
    footer .right p{margin-left: 0px;}
}

</style>
