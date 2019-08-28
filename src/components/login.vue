<template>
  <div class="login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <h2>
        <i class="el-icon-star-off"></i> vuex练习
      </h2>
      <el-form-item label="用户" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    // var checkAge = (rule, value, callback) => {
    //   if (!value) {
    //     return callback(new Error('年龄不能为空'));
    //   }
    //   setTimeout(() => {
    //     if (!Number.isInteger(value)) {
    //       callback(new Error('请输入数字值'));
    //     } else {
    //       if (value < 18) {
    //         callback(new Error('必须年满18岁'));
    //       } else {
    //         callback();
    //       }
    //     }
    //   }, 1000);
    // };
    // var validatePass = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请输入密码'));
    //   } else {
    //     if (this.ruleForm.checkPass !== '') {
    //       this.$refs.ruleForm.validateField('checkPass');
    //     }
    //     callback();
    //   }
    // };
    // var validatePass2 = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('请再次输入密码'));
    //   } else if (value !== this.ruleForm.pass) {
    //     callback(new Error('两次输入密码不一致!'));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      ruleForm: {
        password: "",
        username: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("/api/login", {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            })
            .then(res => {
              // console.log(res.data.errno);
              if (res.data.errno) {
                // 后台返回 1 ，登录失败
                this.$message.error("用户不存在");
              } else {
                this.$message({
                  message: "登录成功",
                  type: "success"
                });
                this.$router.push('/user/userlist')
                this.$store.commit('keepLogin', this.ruleForm.username)
              }
            });

          // alert('submit!');
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid){
          this.$axios.post("/api/register", {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            }).then(res => {
              if(res.data.errno){
                this.$message.error("该用户名已注册");
                return
              }
              this.$message({
                  message: "注册成功",
                  type: "success"
              });
            })
        }
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 520px;
  height: 300px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 10px 10px 5px #888888;
}
.demo-ruleForm {
  margin-left: 60px;
}
h2 {
  text-align: center;
}
</style>
