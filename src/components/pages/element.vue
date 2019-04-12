<template>
<div>
    <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="一致性 Consistency" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </el-collapse-item>
    <el-collapse-item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </el-collapse-item>
    <el-collapse-item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
    </el-collapse-item>
    <el-collapse-item title="可控 Controllability" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
    </el-collapse-item>
    </el-collapse>
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
        <h3>{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
    <el-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <el-button slot="reference">hover 激活</el-button>
    </el-popover>
    <el-popover
    placement="right"
    width="400"
    trigger="click">
    <el-table :data="gridData">
        <el-table-column width="150" property="date" label="日期"></el-table-column>
        <el-table-column width="100" property="name" label="姓名"></el-table-column>
        <el-table-column width="300" property="address" label="地址"></el-table-column>
    </el-table>
    <el-button slot="reference">click 激活</el-button>
    </el-popover>

    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
    <div style="height: 300px;">
    <el-steps direction="vertical">
        <el-step title="步骤 1" icon="el-icon-check"></el-step>
        <el-step title="步骤 2" icon="el-icon-check"></el-step>
        <el-step title="步骤 3" icon="el-icon-check" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤 1" icon="el-icon-check"></el-step>
        <el-step title="步骤 2" icon="el-icon-error"></el-step>
        <el-step title="步骤 3" icon="el-icon-check" description="这是一段很长很长很长的描述性文字"></el-step>
    </el-steps>
    <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
        <el-step title="步骤 1" ></el-step>
        <el-step title="步骤 2" ></el-step>
        <el-step title="步骤 3" ></el-step>
    </el-steps>
    <el-tabs v-model="activeName2" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
        
    <el-button plain @click="open">可自动关闭</el-button>
    <el-button plain @click="open2">不会自动关闭</el-button>

    <el-button type="text" @click="alert1">点击打开 Message Box</el-button>
    <el-button type="text" @click="alert2">点击打开 Message Box</el-button>

    <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        :data="tableData"
        style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    
    <el-table
        :data="tableData"
        max-height="300"
        border
        style="width: 800px"
        highlight-current-row
        show-summary
        :row-class-name="tableRowClassName">
        <el-table-column fixed type="selection" width="60"></el-table-column>
        <el-table-column fixed type="index" width="50"></el-table-column>
        <el-table-column fixed prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="180" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址" width="180" show-overflow-tooltip></el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>


    </div>
</div>
</template>

<script>

export default {
  data () {
    return {
      searchFlag: false,
      searchText: '',
      menuList: [],
      gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
    tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      dialogVisible: false,
      activeName2: 'first',
      loading: true
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

    },
    handleClose(done) {
        this.$confirm('确认关闭？')
        .then(_ => {
        done();
        })
        .catch(_ => {});
    },

    open() {
        const h = this.$createElement;
        this.$notify({
            title: '标题名称',
            duration:1000,
            message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
    },

    open2() {
        this.$notify({
            title: '提示',
            message: '这是一条不会自动关闭的消息',
            duration: 0
        });
    },
    alert1() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
    },
    alert2() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
    }
  }
}
</script>
<style>
  /*@import "assets/css/timeline.css";*/
  @import "../../assets/css/carousel.css";
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-step.is-vertical .el-step__icon.is-icon {
        border-radius: 50%;
        background: #67c23a;
  }
</style>