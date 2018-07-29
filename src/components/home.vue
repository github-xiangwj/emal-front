<template>
<div class="main-container">
    <app-banner :listImg="listImg"></app-banner>
    <!-- 秒杀专区 -->
    <div class="section">
        <h3 class="section-title" id="secKill"><div class="line"></div>秒杀专区<div class="line"></div></h3>
        <div class="content">
            <div class="row">
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="clear"></div>
            </div>
            <div class="row">
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    <!-- 领卷专区 -->
    <div class="section">
        <h3 id="coupon" class="section-title"><div class="line"></div>领卷专区<div class="line"></div></h3>
        <div class="content">
            <div class="row">
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="clear"></div>
            </div>
            <div class="row">
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    <!-- 时尚达人 -->
    <div class="section">
        <h3 id="fashion" class="section-title"><div class="line"></div>时尚达人<div class="line"></div></h3>
        <div class="content">
            <div class="row">
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="clear"></div>
            </div>
            <div class="row">
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    <!-- 智能先锋 -->
    <div class="section">
        <h3 id="smartHardware" class="section-title"><div class="line"></div>智能先锋<div class="line"></div></h3>
        <div class="content">
            <div class="row">
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="clear"></div>
            </div>
            <div class="row">
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    <!-- 生活百货 -->
    <div class="section">
        <h3 id="dailyGoods" class="section-title"><div class="line"></div>生活百货<div class="line"></div></h3>
        <div class="content">
            <div class="row">
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="clear"></div>
            </div>
            <div class="row">
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    <!-- 居家优品 -->
    <div class="section">
        <h3 id="hoseItems" class="section-title"><div class="line"></div>居家优品<div class="line"></div></h3>
        <div class="content">
            <div class="row">
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="clear"></div>
            </div>
            <div class="row">
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="content-space"></div>
                <div class="content-items"></div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    <!-- 左侧商品导航 -->
    <div class="left-nav toolbar">
        <div class="item">
            <span @click="goAnchor('secKill')" class="txt">秒杀<br/>专区</span>
        </div>
        <div class="item">
            <span @click="goAnchor('coupon')" class="txt">领卷<br/>专区</span>
        </div>
        <div class="item">
            <span @click="goAnchor('fashion')" class="txt">时尚<br/>达人</span>
        </div>
        <div class="item">
            <span @click="goAnchor('smartHardware')" class="txt">智能<br/>先锋</span>
        </div>
        <div class="item">
            <span @click="goAnchor('dailyGoods')" class="txt">生活<br/>百货</span>
        </div>
        <div class="item">
            <span @click="goAnchor('hoseItems')" class="txt">居家<br/>优品</span>
        </div>
    </div>
    <!-- 右侧用户信息导航 -->
    <div class="right-nav toolbar">
        <div class="item" @mouseenter="show('show_toolbar_user')" @mouseleave="hidden('show_toolbar_user')">
            <i class="icon user"></i>
            <span class="txt" v-show="show_toolbar_user">会员中心</span>
        </div>
        <div class="item" @mouseenter="show('show_toolbar_cart')" @mouseleave="hidden('show_toolbar_cart')">
            <i class="icon cart"></i>
            <span class="txt" v-show="show_toolbar_cart">购物车</span>
        </div>
        <div class="item" @mouseenter="show('show_toolbar_ticket')" @mouseleave="hidden('show_toolbar_ticket')">
            <i class="icon ticket"></i>
            <span class="txt" v-show="show_toolbar_ticket">领券中心</span>
        </div>
        <div class="item" @mouseenter="show('show_toolbar_attention')" @mouseleave="hidden('show_toolbar_attention')">
            <i class="icon attention"></i>
            <span class="txt" v-show="show_toolbar_attention">关注</span>
        </div>
        <div class="item" @mouseenter="show('show_toolbar_history')" @mouseleave="hidden('show_toolbar_history')">
            <i class="icon history"></i>
            <span class="txt" v-show="show_toolbar_history">浏览记录</span>
        </div>
        <div class="item" @mouseenter="show('show_toolbar_information')" @mouseleave="hidden('show_toolbar_information')">
            <i class="icon information"></i>
            <span class="txt" v-show="show_toolbar_information">消息</span>
        </div>
        <div class="item" @mouseenter="show('show_toolbar_feedback')" @mouseleave="hidden('show_toolbar_feedback')">
            <i class="icon feedback"></i>
            <span class="txt" v-show="show_toolbar_feedback">反馈</span>
        </div>
    </div>
    <div class="goTop">
        <div class="item" @click="goTop"  @mouseenter="show('show_goTop')" @mouseleave="hidden('show_goTop')">
            <i class="icon goTop"></i>
            <span class="txt" v-show="show_goTop">顶部</span>
        </div>
    </div>
</div>
</template>

<script>
import Banner from './templates/Banner.vue'
import a from '../assets/img/banner1.jpg'
import b from '../assets/img/banner2.jpg'
import c from '../assets/img/banner3.jpg'
export default {
    name: 'Home',
    data() {
        return {
            listImg: [{
                url: a
            }, {
                url: b
            }, {
                url: c
            }],

            show_toolbar_user: false,
            show_toolbar_cart: false,
            show_toolbar_ticket: false,
            show_toolbar_attention: false,
            show_toolbar_history: false,
            show_toolbar_information: false,
            show_toolbar_feedback: false,
            show_goTop: false,
        }
    },
    
    components: {
        'app-banner': Banner
    },

    methods: {
        //显示
        show: function(el) {
            console.log(el);
            this[el] = true;
        },
        //隐藏
        hidden: function(el){
            this[el] = false;
        },
        //回到顶部
        goTop(){
            let distance = document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
            let step = distance/20; //每步的距离
            (function jump(){
                if(distance > 0){
                    distance -= step;
                    window.scrollTo(0,distance);
                    setTimeout(jump,10)
                }
            })();
        },
        //定位到锚点
        goAnchor: function(anchorId){
            let anchor = document.getElementById(anchorId);
            //卷曲的高度
            let scrollTop = document.documentElement.scrollTop;
            //顶部head高度
            let headHeight = document.getElementById('header').offsetHeight;
            //元素距离顶部的高度
            let offsetTop = anchor.offsetTop - headHeight;
            //定位要滑动的距离
            let distance = scrollTop - offsetTop ;
            let step = distance/20; //每步的距离
            (function gotoAnchor(){
                //滚动到元素下方时
                if(distance > 0){
                    if(distance < step){
                        window.scrollTo(0 , offsetTop);
                    }else{
                        distance -= step;
                        //如果滚动之后距离小于offsetTop，则直接滚动到offsetTop
                        if(distance < offsetTop){
                            window.scrollTo(0 , offsetTop);
                        }else{
                            window.scrollTo(0 , distance);
                            setTimeout(gotoAnchor,10);
                        }
                    }
                }
                //滚动到元素上方时
                else{
                    distance = Math.abs(distance);
                    step = Math.abs(step);
                    if(distance < step){
                        window.scrollTo(0 , offsetTop);
                    }else{
                        distance -= step;
                        //如果滚动之后距离小于offsetTop，则直接滚动到offsetTop
                        if(distance < offsetTop){
                            window.scrollTo(0 , offsetTop);
                        }else{
                            window.scrollTo(0 , distance);
                            setTimeout(gotoAnchor,10);
                        }
                    }
                }

            })();
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
    height: 500px;
    margin: 20px auto;
}
.section .section-title {
    width: 300px;
    height: 40px;
    font-size: 28px;
    font-family: 'fzzzh';
    font-weight: normal;
    text-align: center;
    line-height: 40px;
    margin: 0 auto;
}
.section .section-title .line {
    display: inline-block;
    padding: 2px 30px;
    margin: 10px 10px;
    background: #de3030;
}
.section .row {
    height: 200px;
    margin: 10px auto;
}
.section .row .content-items, .section .row .content-space {
    float: left;
    height: 100%;
}
.section .row .content-items {
    background: #fff;
    width: 32%;
    background-image: url(../assets/img/01.jpg);
    background-repeat: no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
}
.section .row .content-space {
    width: 2%;
}
.section .clear {
    clear: both;
}

.left-nav {
    left: 0;
    position: fixed;
    top: 30%;
    z-index: 9999;
}
.left-nav .item{
    font-size: 0;
    background-color: #063761;
    margin-bottom: 1px;
}
.left-nav .item:hover{
    background-color: #c81623;
}
.left-nav .item .txt{
    left: 100%;
    cursor: pointer;
    width: 28px;
    height: 28px;
    color: #fff;
    font-size: 14px;
    font-family: 微软雅黑;
    display: inline-block;
    text-align: center;
    padding: 8px;
    line-height: 14px;
}
.right-nav {
    right: 0;
    position: fixed;
    top: 30%;
    z-index: 9999;
}
.right-nav .item .txt{
    right: 100%;
}
.goTop .item .txt{
    right: 100%;
}
.right-nav .item, .goTop .item{
    margin: 1px auto;
    font-size: 0;
    background-color: #7a6e6e;
    border-radius: 4px;
}
.right-nav .item .icon, .goTop .item .icon {
    position: relative;
    display: inline-block;
    cursor: pointer;
    width: 30px;
    height: 30px;
    background-image: url(../assets/img/toolbars.png);
    background-repeat: no-repeat;
}
.right-nav .item:hover, .goTop .item:hover{
    background-color: #c81623;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.right-nav .item .txt, .goTop .item .txt{
    position: absolute;
    cursor: pointer;
    width: 80px;
    height: 30px;
    background-color: #c81623;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    color: #fff;
    font-size: 14px;
    font-family: 微软雅黑;
    text-align: center;
    line-height: 30px;
}
.right-nav .item .user {
    background-position: -89px -176px;
}
.right-nav .item .cart {
    background-position: -52px -2px;
}
.right-nav .item .ticket {
    background-position: -191px -102px;
}
.right-nav .item .attention {
    background-position: -50px -52px;
}
.right-nav .item .history {
    background-position: -50px -102px;
}
.right-nav .item .information {
    background-position: -190px -152px;
}
.right-nav .item .feedback {
    background-position: -50px -302px;
}
.goTop .item .feedback {
    background-position: -50px -302px;
}
.goTop .item .goTop {
    background-position: -50px -253px;
}

.goTop  {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 9999;
}
</style>
