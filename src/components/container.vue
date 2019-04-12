<template>
  <el-container>
    <el-header id="header">
      <div class="menu-lvl-1">
        <div class="menu-lvl-1-menu">
          <div class="head-logo">
            <img src='../assets/img/logo.png' class="logo"/>
          </div>
          <div class="head-menu">
            <span class="menu" v-for="menu in menuList" :value="menu.menuId" :key="menu.menuId">
              <!-- 有子菜单的菜单 -->
              <!-- 下拉菜单形式
              <el-dropdown trigger="click"  v-if="menu.subMenuList && menu.subMenuList.length>0">
                <span tabIndex="-1" class="el-dropdown-link" :menuId="menu.menuId">
                  <span>{{menu.menuName}}</span>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item v-for="subMenu in menu.subMenuList" :value="subMenu.menuId" :key="subMenu.menuId">
                    <span><router-link :to="{path: subMenu.route}">{{subMenu.menuName}}</router-link></span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              -->
              <span v-if="menu.subMenuList && menu.subMenuList.length>0" :menuId="menu.menuId">
                <a href="javascript:;" @mouseover="menuToggleOver(menu,$event)" @mouseout="menuToggleOut(menu,$event)">{{menu.menuName}}</a>
                <div class="menu-lvl-2">
                  <div class="menu-lvl-2-item" v-for="subMenu in menu.subMenuList" :value="subMenu.menuId" :key="subMenu.menuId">
                    <span><router-link :to="{path: subMenu.route}">{{subMenu.menuName}}</router-link></span>
                  </div>
                  <div class="menu-lvl-2-item-empty"></div>
                </div>
              </span>
              <!-- 没有子菜单的菜单 -->
              <router-link v-else :to="{path: menu.route}" 
                @mouseover.native="menuToggleOver(menu,$event)" @mouseout.native="menuToggleOut(menu,$event)">
                {{menu.menuName}}
              </router-link>
            </span>
          </div>
        </div>
        <div class="menu-lvl-1-option">
          <div class="head-login">
            <el-button type="primary" @click="gotoLogin">登陆</el-button>
          </div>
          <div class="head-form">
            <el-input v-model="searchText" placeholder="请输入内容"></el-input>
            <el-button type="primary" icon="el-icon-search" @click="query" :loading="searchFlag">搜索</el-button>
          </div>
        </div>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer id="footer" style="height: auto;">
        <div class="container">
            <ul>
                <li>产品</li>
                <li><a href="/questions/hottest?utm_source=sf-footer&amp;utm_medium=footer-nav&amp;utm_campaign=product&amp;utm_content=footer-links-hottest-questions&amp;utm_term=热门问答">热门问答</a></li>
                <li><a href="/blogs/hottest?utm_source=sf-footer&amp;utm_medium=footer-nav&amp;utm_campaign=product&amp;utm_content=footer-links-hottest-questions&amp;utm_term=热门专栏">热门专栏</a></li>
                <li><a href="/lives?utm_source=sf-footer&amp;utm_medium=footer-nav&amp;utm_campaign=product&amp;utm_content=footer-links-hottest-questions&amp;utm_term=热门讲堂">热门讲堂</a></li>
            </ul>
            <ul>
                <li>关于</li>
                <li><a href="https://about.segmentfault.com/?utm_source=sf-footer&amp;utm_medium=footer-nav&amp;utm_campaign=about&amp;utm_content=about-index&amp;utm_term=关于我们">关于我们</a></li>
                <li><a href="https://about.segmentfault.com/careers.html?utm_source=sf-footer&amp;utm_medium=footer-nav&amp;utm_campaign=about&amp;utm_content=about-careers&amp;utm_term=加入我们">加入我们</a></li>
                <li><a href="https://about.segmentfault.com/contact.html?utm_source=sf-footer&amp;utm_medium=footer-nav&amp;utm_campaign=about&amp;utm_content=about-contact&amp;utm_term=联系我们">联系我们</a></li>
            </ul>
            <ul>
                <li>条款</li>
                <li><a href="/tos">服务条款</a></li>
                <li><a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">内容许可</a></li>
            </ul>
            <div style="clear: both"></div>
        </div>
        <div class="copyright">
            Copyright © 2011-2018 SegmentFault. 当前呈现版本 17.06.16<br>
            <a href="http://www.miibeian.gov.cn/" rel="nofollow">浙ICP备 15005796号-2</a> &nbsp;
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602002000" rel="nofollow">浙公网安备 33010602002000号</a>
            <span class="ml5">杭州堆栈科技有限公司版权所有</span>
            <p class="mt30">CDN 存储服务由 <a target="_blank" href="https://www.upyun.com/?utm_source=segmentfault&amp;utm_medium=link&amp;utm_campaign=upyun&amp;md=segmentfault">又拍云</a> 赞助提供 </p>
        </div>
    </el-footer>
  </el-container>
</template>

<script>

export default {
  data () {
    return {
      activeMenu: 0,
      searchFlag: false,
      searchText: '',
      menuList: []
    }
  },
  mounted: function() {
    this.$http.get(this.rootUrl + 'menu')
      .then((response) => {
          console.log(response);
          this.menuList = response.data;
          console.log(this.menuList[0].subMenuList.length);
      }, (response) => {
          // 响应错误回调
      });
    //跳转到首页
    this.$router.push('/container/home');
  },
  methods: {
    query: function() {
      this.searchFlag = true
    },
    gotoLogin: function() {

    },
    menuToggleOver: function(menu,e){
      //先让所有的二级菜单隐藏
      Array.from(document.getElementsByClassName('menu-lvl-2')).forEach(function(ele,i){
        ele.style.display = 'none';
      });
      //显示目标二级菜单
      if(menu && menu.subMenuList && menu.subMenuList.length>0){
        e.currentTarget.nextElementSibling.style.display = 'table';
      }

      e = e || window.event;  
      if(e.stopPropagation) { //W3C阻止冒泡方法  
        e.stopPropagation();  
      } else {  
        e.cancelBubble = true; //IE阻止冒泡方法  
      }
    },
    menuToggleOut: function(menu,e){
      /*
      if(menu && menu.subMenuList && menu.subMenuList.length>0){
        e.currentTarget.nextElementSibling.style.display = 'none';
      }
      */
    }
  }
}
</script>

<style>
  html{
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 宋体;
    font-size: 16px;
  }
  
  input,button,a,div,span {
      outline:0 none !important;
  }
  body section {
    display: block !important;
  }
  body > .el-container {
    margin-bottom: 0;
  }
  a:-webkit-any-link {
    color: #d3dce6;
  }
  .el-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
    background-color: #04075a;
    height: 50px !important;
    padding: 10px 20px;
  }
  .el-header .logo {
    height: 30px;
  }
  .el-header .el-dropdown, .el-header .el-input, .el-header .el-button {
    color: #d3dce6;
    font-weight: bold;
    font-family: 宋体;
    font-size: 16px;
  }
  .head-form, .head-login {
    display: table-cell;
    vertical-align: middle;
    float:right;
  }
  .head-login {
    margin-left: 100px;
  }
  .head-logo,.head-menu {
    display: table-cell;
    vertical-align: middle;
  }
  .head-menu {
    margin-left: 40px;
  }
  .head-menu a:hover {
    text-decoration: none; 
    border-bottom: 3px solid #22bf27; 
  }
  .el-header .el-dropdown {
    height: 30px;
    line-height: 30px;
    cursor: pointer;
  }
  .el-dropdown-link {
    display: inline-block
  }
  
  .el-dropdown>span:focus {
    border-radius: 5px;
    background-color: #333;
    color: rgb(45, 170, 66);
  }
  .el-dropdown-menu__item {
    padding: 0;
  }
  .menu {
    margin: 0 5px;
  }
  .menu a, .menu>.el-dropdown>span>span {
    padding: 5px 0;
    text-decoration: none;
    font-weight: bold;
  }
  .menu-lvl-1 {
    display: table;
    width: 100%;
  }
  .menu-lvl-1-menu {
    display: table-cell;
    width: 50%;
  }
  .menu-lvl-1-option {
    display: table-cell;
    width: 50%;
  }
  .menu-lvl-2 {
    position: absolute;
    top: 50px;
    left: 0;
    height: 30px;
    width: 100%;
    display: none;/*display:table*/
    background-color: #25b51c;
  }
  .displayTable {
    display:table
  }
  .menu-lvl-2-item {
    display: table-cell;
    vertical-align: middle;
    width: 100px;
  }
  .menu-lvl-2 a {
    color: #333;
  }
  .router-link-exact-active {
    background-color: #333;
  }
  .el-dropdown-menu li a {
    padding: 7px 20px;
    border-radius: 5px;
    text-decoration: none;
    color: rgb(45, 170, 66);
  }
  .el-dropdown-menu li a:hover {
    background-color: #473c54;
  }
  .el-input {
    width: 200px;
  }
  .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
  .el-button {
    padding: 6px 7px;
  }
  .el-button--primary:hover,
  .el-button--primary:focus {
    background-color: #c11609;
    border-color: #c11609;
  }
  .el-button--primary {
    background-color: #5a6758;
    border-color: #5a6758;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    height: auto;
    padding: 10px;
  }
  
  .el-main {
    flex: 1;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    padding: 20px 5%;
    margin-top: 80px;
  }

  .el-footer {
    background: #231b1b;
  }
  .el-footer .container {
    margin: 0 auto;
    text-align: left;
    width: 600px;
  }
  .el-footer .container ul {
    float: left;
    width: 150px;
  }
  .el-footer .container ul li {
    list-style: none;
    height: 30px;
    color: #f5d8d8;
  }
  .el-footer .container ul li a {
    text-decoration: none;
    font-size: 14px;
    color: #a97b7b;
  }
  .el-footer .container ul li a:hover{
    text-decoration: underline;
  }
  .copyright {
    text-align: center;
    font-size: 12px;
    color: #fff;
  }
  .copyright a {
    color: #fff;
    text-decoration: none;
  }
  .copyright a:hover{
    text-decoration: underline;
  }
</style>
