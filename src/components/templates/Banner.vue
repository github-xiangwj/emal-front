<template>
    <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper">
            <div class="swiper-slide" v-for="str in listImg" :key="str.url" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        props: ['listImg'],
        name: 'carrousel',
        data () {
            return {
                swiperOption: {
                    autoplay : {
                        disableOnInteraction: false, //用户操作后是否禁止自动循环
                        delay: 3000 //自自动循环时间
                    }, //可选选项，自动滑动
                    speed: 500, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
                    loop:true, //循环切换
                    grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
                    // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
                    autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。   
                    scrollbar: '.swiper-scrollbar',
                    mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
                    observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
                
                    pagination: {
                        el: '.swiper-pagination',
                        // type : 'progressbar', //分页器形状
                        clickable :true, //点击分页器的指示点分页器会控制Swiper切换
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },       
                },
                computed: {
                    swiper() {
                        return this.$refs.mySwiper.swiper
                    }
                }
            }
        }
    }
</script>

<style lang="less">
.swiper-container {
    width: 100%;
    height: 10rem;
    .swiper-wrapper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }
}

.swiper-pagination {
    right: 100px;
    top: 200px;
}
.swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    display: inline-block;
    background: #541358;
    opacity: 0.5;
    margin: 2px 5px;
}
.swiper-pagination-bullet:focus{
    border: none;
}
.swiper-pagination-bullet-active{
    opacity: 1;
}
.swiper-button-prev{
    left: 7%;
}
.swiper-button-next{
    right: 7%;
}
.swiper-button-prev, .swiper-button-next {
    top: 150px;
}
</style>