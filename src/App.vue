<template>
  <div id="outContainer" @mouseover="bind($event)">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    methods: {
      bind: function(e){
        if(e == undefined) return;
        //不隐藏二级菜单的标签的class
        let parentNode = document.getElementsByClassName('head-menu');//['menu-lvl-2','head-menu','menu-lvl-1-menu','menu-lvl-1','el-header'];
        parentNode = parentNode[0];
        //获取当前目标元素的class
        let node = e.path[0];
        while (node){
          if (node === parentNode) {
            return;
          }
          node = node.parentNode;
        }

        //其余不隐藏二级菜单的class
        let excludeClasses = ['el-header'];
        if(excludeClasses.indexOf(e.path[0].className)>=0){
          return;
        }
        
        Array.from(document.getElementsByClassName('menu-lvl-2')).forEach(function(ele,i){
          ele.style.display = 'none';
        });
        /*
        let targetpath = e.path;
        //如果在不隐藏的数组内，那么不隐藏二级菜单，否则隐藏
        if(excludeClasses.indexOf(targetpath[0].className)==-1){
          Array.from(document.getElementsByClassName('menu-lvl-2')).forEach(function(ele,i){
            ele.style.display = 'none';
          });
        }
        */
      }
    }
}

</script>

<style>
</style>
