<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee;overflow-y: auto">

      <el-header class=" bg-black" height="141px" style="padding-right: 0;">
        <div class="flex flex-sub justify-between bg-black">
          <div class="extra-large bg-black text-white text-blod text-center head-icon">数据分析系统
          </div>

          <div class="flex flex-sub justify-end header-right bg-black">
            <div class="flex align-center ">
              <el-dropdown class="head-drop">
                <el-badge value="new" class="item">
                  <i class="el-icon-message-solid text-white large" style="margin-right: 15px"></i>
                </el-badge>
                <el-dropdown-menu slot="dropdown">

                  <el-dropdown-item class="clearfix">
                    查看
                    <el-badge class="mark" :value="12"/>
                  </el-dropdown-item>

                  <el-dropdown-item class="clearfix">
                    通知
                    <el-badge class="mark" :value="12"/>
                  </el-dropdown-item>

                  <el-dropdown-item class="clearfix">
                    日志
                    <el-badge class="mark" :value="12"/>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <div class="flex align-center justify-center margin-right-xs">
                <el-avatar :size="40" src="https://empty" @error="errorHandler">
                  <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                </el-avatar>
                <span class="text-cut margin-lr-xs text-white">用户名啊啊啊啊</span>
              </div>

              <span class="exit padding-right text-white" onselectstart="return false;" unselectable="on">退出登录</span>
            </div>
          </div>
        </div>
        <!--          导航栏-->
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo flex align-end padding-left-xl"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545C64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">数据中心</template>

            <el-submenu index="2-1">
              <template slot="title">电商平台数据</template>
              <el-menu-item index="2-1-1">
                <el-submenu index="2-1-1-1">
                  <template slot="title">淘宝 / 天猫</template>
                  <el-menu-item index="2-1-1-1-1">HP官方旗舰店</el-menu-item>
                  <el-menu-item index="2-1-1-1-2">HP儒韵店</el-menu-item>
                </el-submenu>
              </el-menu-item>
              <el-menu-item index="2-1-2-1">京东商城</el-menu-item>
              <el-menu-item index="2-1-3-1">唯品会</el-menu-item>
              <el-menu-item index="2-1-4-1">亚马逊</el-menu-item>
              <el-menu-item index="2-1-5-1">拼多多</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-header>

      <el-container :style="{'height':orderHight+'px'}">
        <el-header height="50px" style="line-height: 50px;background: #fff">
          <!--          面包屑导航栏-->
          <div class=" flex align-center padding-left-sm">
            <div class="margin-right-sm">您当前的位置：</div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>电商平台数据</el-breadcrumb-item>
              <el-breadcrumb-item>淘宝 / 天猫</el-breadcrumb-item>
              <el-breadcrumb-item>HP官方旗舰店</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-header>
        <el-container :style="{'height':orderHight+'px'}">
          <el-aside width="300px" class="sidebar" :style="{'height':'85%','background-color':' #F2F6FC'}">
            <div class="padding-xs padding-top-sm padding-bottom-sm sidebar-item" v-for="(items,index) in 10"
                 :key="index">
              <div class="sidebar-item-title large margin-bottom-sm">标题头 <i
                class="el-icon-arrow-right margin-left-xs large"></i>
              </div>

              <div class="flex sidebar-item-son">
                <div class="flex-sub text-cut padding-lr-xs text-center" v-for="(item,index) in 3" :key="index"><a
                  href="#"
                  class="sidebar-item-son-item pointer">子节点</a>
                </div>
              </div>

              <div class="sub-menu-box" :style="{'height':orderHight+'px'}">
                <div class="sub-menu">
                  <div class="large text-blod sub-menu-title margin-bottom-sm">標題頭</div>
                  <div class="flex flex-wrap base sub-menu-list">
                    <div class="margin-bottom-sm sub-menu-item" style="width: 50%" v-for="(item,index) in 6"
                         :key="index">
                      123132
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </el-aside>
          <el-main :style="{'height':'96%'}">

            <!--          模块头部-->
            <div class="idx-header ">
              <el-card>
                <div class="flex align-center justify-between">
                  <div class="extra-large text-blod">模块名</div>

                  <div class="base pointer flex align-center">
                    <!-- 市场大盘时显示-->
                    <el-dropdown @command="selectStore" size="small" type="primary" class="margin-right-sm"
                                 v-if="false">
                      {{store[storeIndex].name}}
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(item,index) in store" :key="index" :command="index">{{item.name}}
                        </el-dropdown-item>

                      </el-dropdown-menu>
                    </el-dropdown>
                    <el-button type="primary" @click="openUpLoad()">上传<i class="el-icon-upload el-icon--right"></i>
                    </el-button>
                    <el-button type="warning" @click="manageModel = true">管理<i
                      class="el-icon-setting el-icon--right"></i>
                    </el-button>
                    <span class="margin-left-xs log" @click="dialogTableVisible = true"><i
                      class="el-icon-document"></i> 日志</span>
                  </div>
                </div>
              </el-card>
            </div>

            <!--          子类筛选选项-->
            <el-card class="margin-top-sm">
              <div class="idx-subnav flex align-start">
                <div class="flex-sub flex idx-subnav-list">
                <span v-for="(item,index) in opts" :key="index" class="margin-right-xl"
                      :class="curIdx==index?'text-cyan':''" :data-index="index" @click="choosednav">{{item}}</span>
                </div>
                <div class="text-blue">设置</div>
              </div>
            </el-card>

            <!--         360 子类选项-->
            <el-card class="margin-top-sm">
              <div class="flex flex-wrap idx-opt-list">
                <div class="padding-xs margin-bottom-sm border idx-opt-item" v-for="(item,index) in 12" :key
                     v-if="isShowAll?index<8:index<12">
                  <div>ID 121321231</div>
                  <div class="text-cut">光影精灵2</div>
                </div>
              </div>

              <div class="text-center " @click="showAll()"><i class="extra-large"
                                                              :class="isShowAll?'el-icon-arrow-up':'el-icon-arrow-down'"></i>
              </div>
            </el-card>

            <!--          选择切换-->
            <div class=" margin-top-sm">
              <el-menu
                :default-active="default1"
                class="el-menu-demo"
                mode="horizontal"
                @select="selectSub"
                text-color="#333"
                active-text-color="#ffd04b">
                <el-menu-item :index="item.id.toString()" v-for="(item,index) in navlist" :key="index">{{item.name}}
                </el-menu-item>
              </el-menu>
            </div>

            <!--          主要内容-->
            <el-card class="margin-top-sm">
              <div class="idx-main">
                <div class="large text-blod marign-bottom-sm flex align-end justify-between margin-top-sm">
                  <div>
                    <div class="extra-large">標題名</div>
                    <div class="flex-sub flex margin-top">
                      <el-radio-group v-model="radio2" @change="changeRadio">
                        <el-radio v-for="(item,index) in 3" :key="index" :label="index">选项</el-radio>

                      </el-radio-group>
                    </div>
                  </div>
                  <div class="flex align-center">
                    <el-dropdown trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                      日期:<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="a" icon="el-icon-s-promotion">最近一天</el-dropdown-item>
                        <el-dropdown-item command="b" icon="el-icon-s-promotion">最近七天</el-dropdown-item>
                        <el-dropdown-item command="c" icon="el-icon-s-promotion">最近三十天</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>

                    <div class="margin-left-sm">
                      <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择起始日期">
                      </el-date-picker>
                      ~
                      <el-date-picker
                        v-model="value2"
                        type="date"
                        placeholder="选择结束日期">
                      </el-date-picker>
                    </div>

                    <el-button type="text" class="margin-left-sm">下载<i class="el-icon-download el-icon--right"></i>
                    </el-button>

                  </div>
                </div>

                <!--              选项筛选-->
                <div class="idx-options margin-bottom-sm margin-top">
                  <div class=" margin-top-sm margin-bottom-sm padding-lr-xs "
                       :class="showmore?'flex flex-wrap':'idx-tag'">
                    <el-tag
                      class="margin-right-xxl margin-bottom-sm"
                      v-for="item in tags"
                      :key="index"
                      :type="item.ischoosed?'success':'warn'"
                    >
                      {{ item.label }} <i class="el-icon-check el-icon--right" v-if="item.ischoosed"></i>
                    </el-tag>

                    <div class="checkmore" @click="checkmore()" v-if="tags.length>4&!showmore">查看更多</div>
                  </div>
                  <div class="flex align-center">
                    <el-button-group>
                      <el-button type="primary" size="mini">全选</el-button>
                      <el-button type="warning" size="mini">取消</el-button>
                      <el-button type="primary" size="mini">反选</el-button>
                    </el-button-group>
                  </div>
                </div>


                <!--              表格-->
                <el-table class="margin-top-sm" :data="tableData" style="width: 92%" max-height="400"
                          ref="multipleTable"
                          tooltip-effect="dark">
                  <!--  可勾选-->
                  <!--                <el-table-column-->
                  <!--                  type="selection"-->
                  <!--                  width="55">-->
                  <!--                </el-table-column>-->
                  <template v-for="(item,index) in arr">

                    <el-table-column :prop="item.prop" :label="item.label" :key="index" width=""
                                     v-if="item.type==='normal'">

                    </el-table-column>
                    <el-table-column slot-scope="scope"></el-table-column>
                  </template>

                </el-table>

                <!--              分页-->
                <div class="flex justify-center padding-sm">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="20"
                    layout=" prev, pager, next"
                    :total="500"
                    prev-text="上一页"
                    next-text="下一页"
                  >
                  </el-pagination>
                </div>
              </div>
            </el-card>

          </el-main>
        </el-container>
      </el-container>
    </el-container>


    <!--    日志弹窗-->
    <el-dialog title="日志" :visible.sync="dialogTableVisible">
      <el-table :data="tableData" height="350">

        <el-table-column property="address" label=""></el-table-column>
      </el-table>
    </el-dialog>

    <!--    上传弹窗-->
    <transition name="el-fade-in-linear">
      <div class="up-dialog" v-if="isShowLoadBox">
        <div class="up-dialogBox bg-white padding-sm text-black">
          <!--        关闭按钮-->
          <div class="text-right">
            <i class="el-icon-close text-blod large " @click="closeDialog()"></i>
          </div>

          <!--        主体内容-->

          <!--          上传列表-->
          <div class="upLoadList flex flex-direction ">
            <el-upload
              class="upload-demo   "
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="true"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :auto-upload="false"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :on-change="filechange"
              :file-list="fileList"

            >
              <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
              <el-button  class="pointer el-button--small bg-cyan  margin-left-sm" @click="submit">点击上传
                </el-button>
              <el-button size="small" class="el-button--small bg-red margin-left-sm" @click="closeUpload">取消
              </el-button>
              <div slot="tip" class="el-upload__tip">点击选择文件即可上传</div>
            </el-upload>
            <div class="text-center extra-large padding-xl" v-if="fileList.length<=0">空空如也，请先添加文件吧</div>

          </div>
        </div>
      </div>
    </transition>

    <!--    缩小上传弹窗-->
    <div class="uploadSmall bg-cyan "
         :class="uploadShow?'animate-small':''"
         @click="showUpload()">
      <div class="flex align-center justify-center" style="height: 100%"><span>上传中</span></div>
    </div>

    <!--    管理弹窗-->
    <el-dialog title="管理" :visible.sync="manageModel">
      <el-table :data="tableData" style="width: 92%" max-height="400" ref="multipleTable" tooltip-effect="dark">
        <!--  可勾选-->
        <!--        <el-table-column-->
        <!--          type="selection"-->
        <!--          width="55">-->
        <!--        </el-table-column>-->
        <!--        <template v-for="(item,index) in arr">-->

        <!--          <el-table-column :prop="item.prop" :label="item.label" :key="index" width=""-->
        <!--                           v-if="item.type==='normal'">-->

        <!--          </el-table-column>-->
        <!--          <el-table-column slot-scope="scope"></el-table-column>-->
        <!--        </template>-->
        <el-table-column prop="filename" label="文件名"></el-table-column>
        <el-table-column prop="date" label="上传日期"></el-table-column>
        <el-table-column prop="author" label="上传人"></el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            <!--            <el-button type="text" size="small">编辑</el-button>-->
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };

            // 测试
            const arr = [{
                label: '定义1', prop: 'date', type: 'normal'
            }, {
                label: '定义2', prop: 'name', type: 'normal'
            }, {
                label: '定义3', prop: 'address', type: 'normal'
            }];


            const list = [{
                name: 'dachui',
                id: 1
            }, {
                name: 'dachui1',
                id: 2
            }]
            return {
                tableData: Array(20).fill(item),
                orderHight: 1000,
                activeIndex2: '1',//控制nav高亮
                default1: '1',
                dialogTableVisible: false,//控制日志弹窗
                manageModel: false,//控制管理弹窗
                navlist: list,//导航列表
                value1: '',//日期值
                value2: '',//日期值
                tags: [{type: '', label: '标签一', ischoosed: false},
                    {type: 'success', label: '标签二', ischoosed: true},
                    {type: 'info', label: '标签三', ischoosed: false},
                    {type: 'danger', label: '标签四', ischoosed: false},
                    {type: 'warning', label: '标签五', ischoosed: false},
                    {type: '', label: '标签一', ischoosed: false},
                    {type: 'success', label: '标签二', ischoosed: true},
                    {type: 'info', label: '标签三', ischoosed: false},
                    {type: 'danger', label: '标签四', ischoosed: false},
                    {type: 'warning', label: '标签五', ischoosed: false}],
                arr: arr,
                currentPage: 1,//表格当前页码
                store: [{id: 0, name: '全部'}, {id: 1, name: '天猫'}, {id: 2, name: '淘宝'}],
                store1: [{id: 0, name: '请选择'}, {id: 1, name: '天猫'}, {id: 2, name: '淘宝'}],
                storeIndex: 0,//选中的店铺来源index
                storeIndex1: 0,
                isShowLoadBox: false,//打开上传弹窗
                isuploading: false,//是否正在上传
                uploadShow: '',//控制上传中的弹窗
                fileList: [],
                showmore: false,//查看更多标签
                opts: ['笔记本电脑', '键盘', '无线鼠标', '有线鼠标', '台式整机', '家用一体机', '显示器', '普通U盘', '其他'],//子类筛选
                curIdx: 0,//当前选中
                isShowAll: false,//是否查看更多
                radio2: 2
            }
        },
        methods: {
            errorHandler() {
                return true
            },

            // 导航栏选择
            handleSelect(key, keyPath) {
                console.log(key, keyPath);

            },

            // 子导航选择
            selectSub(key, keyPath) {
                console.log(key, keyPath);
            },

            // 选择最近几天日期
            handleCommand(command) {
                this.$message('click on item ' + command);
            },
            // 选择店铺来源
            selectStore(command) {
                this.storeIndex = command
            },
            // 选择上传到店铺
            selectToStore(command) {
                this.storeIndex1 = command
            },

            // 点击查看更多
            checkmore() {
                this.showmore = true
            },
            // 分页操作
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },

            //子类导航切换
            choosednav(e) {
                var index = e.target.dataset.index;
                this.curIdx = index
            },

            // 打开上传弹窗
            openUpLoad() {
                this.isShowLoadBox = true;
            },
            // 关闭上传弹窗
            closeUpload() {
                this.isShowLoadBox = false;
            },
            // 缩小上传弹窗
            closeDialog() {
                this.isShowLoadBox = false;
                this.uploadShow = true;
                // this.isuploading = true;

            },
            //放大上传弹窗
            showUpload() {
                this.uploadShow = false;
                this.isShowLoadBox = true;
            },

            // 上传文件状态监听
            filechange(files, fileList) {
                console.log(fileList)
                this.fileList = fileList
            },

            // 点击查看更多
            showAll() {
                this.isShowAll = !this.isShowAll;
            },

            //点击返回选中的单选值
            changeRadio(e) {
                console.log(e)
            },

            // 点击上传资料
            submit() {
                this.$refs.upload.submit();
            },
        },
        mounted: function () {
            var that = this;
            //原生获取屏幕高度
            var orderHight = document.body.clientHeight
            console.log(orderHight)
            that.orderHight = orderHight - 350
            // document.getElementById('order-list').style.height = orderHight + 'px'
        }


    }
</script>

<style scoped>
  .el-date-editor.el-input {
    width: 180px;
  }

  .el-input__inner {
    border: 0px !important;
  }

  .header-right {
    line-height: 80px;
  }

  .head-icon {
    width: 300px;
    line-height: 80px;
    letter-spacing: 2px
  }

  .el-header {
    background-color: #F2F6FC;
    color: #333;
    line-height: 60px;
    text-align: right;
    font-size: 12px;
    padding-left: 0
  }

  .head-drop {
    line-height: 30px;
    margin-right: 30px;
  }

  .el-aside {
    color: #333;
  }

  .sidebar {
    position: relative;
    margin: 10px 10px 20px
  }

  .sidebar-item:hover {
    background: #ffffff;
    box-shadow: 0px 0px 5px #cce6ff inset;
  }

  .sidebar-item:hover .sidebar-item-title, .sidebar-item:hover .sub-menu-box {
    color: #1cbbb4;
    display: block;
    transition: color 0.13s ease-in-out;
  }

  .item {
    margin-top: 0px;
    margin-right: 20px;
  }

  .el-badge__content.is-fixed {
    position: absolute;
    top: 11px !important;
    right: 10px;
    -webkit-transform: translateY(-50%) translateX(100%);
    transform: translateY(-50%) translateX(100%);
  }

  .idx-options {
    background-color: rgba(255, 1, 1, .04);
    padding: 10px;
  }

  .text-cut {
    max-width: 90px;
    line-height: 20px;
  }

  .exit:hover {
    color: #1cbbb4;
    user-select: none;
  }

  .sidebar-item-son div {
    border-right: 1px solid #666666;
  }


  .sidebar-item-son div:last-child {
    border: 0;
  }

  a {
    text-decoration: none;
    color: #333333;
  }

  .sidebar-item .sidebar-item-son .sidebar-item-son-item:hover {
    color: #1cbbb4 !important;
  }

  .sub-menu-box {
    width: 500px;
    position: fixed;
    left: 310px;
    top: 201px;
    display: none;
    z-index: 3;
    color: #333 !important;
  }

  .sub-menu {
    width: 500px;
    min-height: 400px;
    border-radius: 10px;
    padding: 30px 20px;
    background: #fff;
    box-shadow: 0px 0px 10px #cce6ff inset;
  }

  .sub-menu-list .sub-menu-item:hover {
    color: #1cbbb4;
  }

  /*标签*/
  .margin-right-xxl {
    margin-right: 60px;
  }

  .idx-tag {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    position: relative;
  }

  .idx-tag > span {
    display: inline-block;
  }

  .idx-tag .checkmore {
    position: absolute;
    right: 0;
    top: 0px;
    color: #1cbbb4;
    background-color: #ecf5ff;
    padding: 0 10px;
    line-height: 30px;
  }

  /*日志*/
  .log:hover {
    color: #1cbbb4;

  }

  /*上传弹窗*/
  .up-dialog {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, .4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 6;
  }

  .up-dialog .up-dialogBox {
    width: 42%;
    min-height: 300px;
    border-radius: 5px;
  }

  .upLoadList {
    min-height: 260px;
  }

  .uploadSmall {
    width: 200px;
    height: 200px;
    position: fixed;
    bottom: 350px;
    right: 350px;
    display: none;
    z-index: 8;
    transition: all 1s;
  }

  .animate-small {
    display: block;
    bottom: 50px;
    right: 50px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    animation: beSmall 1s ease-in-out;
  }

  @keyframes beSmall {
    0% {
      display: block;
      position: fixed;
      bottom: 350px;
      right: 350px;
      width: 200px;
      height: 200px;
      border-radius: 0%;
    }

    100% {
      display: block;
      bottom: 50px;
      right: 50px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }

  /*上传*/
  .upload-demo {
    position: relative;
  }

  .upload-btn {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px
  }

  /*子类筛选*/
  .idx-subnav {
    justify-content: space-between;
  }

  .idx-subnav .idx-subnav-list span:hover {
    color: #1cbbb4;
  }

  .idx-opt-list .idx-opt-item {
    width: 11.5%;
    margin-right: 1%;
    box-sizing: border-box;
  }
</style>

