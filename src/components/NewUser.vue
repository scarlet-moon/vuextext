<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户列表</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <el-table :data="tableData">
        <el-table-column prop="_id" label="uid"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="password" label="密码"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      tableData: []
    };
  },
  components: {},
  created() {
    this.tableData = this.newUser
  },
  computed: {
    ...mapGetters(['newUser'])
  },
};
</script>

<style scoped >
</style>