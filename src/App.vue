<template>
  <div id="outContainer">
    <el-container>
      <el-header>
        <div class="head-logo">
          <img src='./assets/logo.png' class="logo"/>
        </div>
        <div class="head-menu" >
          <el-dropdown trigger="click" v-for="menu in menuList" :value="menu.menuId" :key="menu.menuId">
            <span tabIndex="-1" class="el-dropdown-link" :menuId="menu.menuId">
              <router-link v-if="menu.subMenuList && menu.subMenuList.length==0" :to="{path: menu.route}">{{menu.menuName}}</router-link>
              <span v-else>{{menu.menuName}}</span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="subMenu in menu.subMenuList" :value="subMenu.menuId" :key="subMenu.menuId">
                <span><router-link :to="{path: subMenu.route}">{{subMenu.menuName}}</router-link></span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="head-login">
          <el-button type="primary" @click="gotoLogin">登陆</el-button>
        </div>
        <div class="head-form">
          <el-input v-model="searchText" placeholder="请输入内容"></el-input>
          <el-button type="primary" icon="el-icon-search" @click="query" :loading="searchFlag">搜索</el-button>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
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
  </div>
</template>

<script>

export default {
  data () {
    return {
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
  },
  methods: {
    query: function() {
      this.searchFlag = true
    },
    gotoLogin: function() {

    }
  }
}
</script>

<style>
  body { 
    margin: 0;
    padding: 0;
    font-family: 宋体;
    font-size: 16px;
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
    background-color: #27456d;
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
    float: right;
  }
  .head-login {
    margin-left: 100px;
  }
  .head-logo,.head-menu {
    float: left;
  }
  .head-menu {
    margin-left: 40px;
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
  .el-dropdown>span>a, .el-dropdown>span>span {
    padding: 7px 20px;
    border-radius: 5px;
    text-decoration: none;
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
    padding: 20px;
    margin-top: 50px;
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
  }
  .el-footer .container ul li a {
    text-decoration: none;
    font-size: 14px;
    color: #888;
  }
  .el-footer .container ul li a:hover{
    text-decoration: underline;
  }
  .copyright {
    text-align: center;
    font-size: 12px;
    color: #000;
  }
  .copyright a {
    color: #000;
    text-decoration: none;
  }
  .copyright a:hover{
    text-decoration: underline;
  }
</style>
