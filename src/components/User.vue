<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu
        :default-openeds="['1', '3']"
        default-active="/user/userlist"
        background-color="#545c64"
        text-color="#fff"
        router
        >
          <el-menu-item class="head-title">
            <template slot="title">
              <i class="el-icon-folder-add"></i>vuex练习
            </template>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>用户管理
            </template>
            <el-menu-item-group >
              <el-menu-item index="/user/userlist">用户列表</el-menu-item>
              <el-menu-item index="/user/olduser">大龄用户</el-menu-item>
              <el-menu-item index="/user/newuser">年轻用户</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>导航二
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>导航三
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{this.$store.state.loginUser}}</span>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  }
};
</script>

<style scoped >
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.head-title {
  font-size: 20px;
  color: #ccc !important;
  background-color: #000 !important ;
}
</style>