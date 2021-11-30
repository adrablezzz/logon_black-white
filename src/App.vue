<template>
  <div id="app">
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="9">
        <div class="left">
          <div class="light"></div>
          <div class="welcome">
            <div class="wel-title">
              欢迎回来!
            </div>
            <div class="wel-text">黑夜给了我黑色的眼睛,<br/>我却用它来寻找光明!</div>
          </div>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="right">
          <div class="rt-inner" >
            <div class="title">欢迎登录</div>
            <el-form :model="userInfo" ref="userInfo" label-width="100px">
              <el-form-item
                prop="username"
                label="用户名"
                :rules="[
                  { required: true, message: '请输入用户名', trigger: 'blur' }
                ]"
              >
                <el-input v-model="userInfo.username" clearable></el-input>
              </el-form-item>
              <el-form-item
                prop="password"
                label="密码"
                :rules="[
                  { required: true, message: '请输入密码', trigger: 'blur' }
                ]"
              >
                <el-input v-model="userInfo.password" clearable show-password></el-input>
              </el-form-item>
              <div class="lo-btn">
                <el-button @click="load('userInfo')" type="goon">登录</el-button>
                <!-- <el-button @click="logon('userInfo')">注册</el-button> -->
              </div>
            </el-form>
          </div>
    </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name: 'APP',
  components: {

  },
  data() {
    return {
      userInfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    load(userInfo) {
      this.$refs[userInfo].validate((valid) => {
        if(valid) {
          this.$notify({
            title: '成功',
            message: '登录成功!',
            type: 'success'
          });
          console.log(this.userInfo)
        }else {
          this.$notify({
            title: '失败',
            message: '登录失败!',
            type: 'error'
          });
          return false;
        }
      })
    },
    logon(userInfo) {
      this.$refs[userInfo].validate((valid) => {
        if(valid) {
          this.$notify({
            title: '成功',
            message: '注册成功!',
            type: 'success'
          });
          console.log(this.userInfo)
        }else {
          this.$notify({
            title: '失败',
            message: '注册失败!',
            type: 'error'
          });
          return false;
        }
      })
    }
  }
}
</script>

<style scope>
@import '~@/assets/css/base.css';
.el-row {
  height: 100vh;
}
.left {
  width: 100%;
  height: 83vh;
  background-color: var(--color-text);
  position: relative;
}
.welcome {
  margin-top: 30%;
  text-align: center;
}
.light {
  position: absolute;
  width: 5%;
  height: 100%;
  right: 25%;
  box-shadow: 100px 0px 20px rgba(255, 255, 255, 0.1);
}
.wel-title {
  font-size: 60px;
}
.wel-text {
  font-size: 18px;
  margin-top: 30px;
  line-height: 40px;
}
.right {
  width: 100%;
  height: 83vh;
  background-color: #fff;
  margin-left: 50%;
  position: relative;
}
.rt-inner {
  width: 60%;
  height: 500px;
  background-color: #fff;
  filter: 0.5;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.title {
  font-size: 40px;
  color: var(--color-text);
  text-align: center;
  overflow: hidden;
  margin-top: 70px;
}
.el-form {
  width: 90%;
  margin-top: 120px;
}
.el-form-item .el-form-item__label {
  color: var(--color-text);
}
.el-input .el-input__inner {
  border: none;
  border-bottom: 1px var(--color-text) solid;
  border-radius: 0px;
  background-color: #fff;
}
.lo-btn .el-button--goon{
  background: var(--color-text);
  border-color: var(--color-text);
  color: #fff;
}

.lo-btn
.el-button--goon,
.el-button--goon:focus,
.el-button--goon.is-active,
.el-button--goon.is-disabled:active,
.el-button--goon:active {
  background: var(--color-text);
  border-color: var(--color-text);
  color: #fff;
  width: 150px;
  position: relative;
  left: 50%;
  transform: translate(-30%,50%);
  border-radius: 999em;
}
.el-button--goon.is-disabled:hover,
.el-button--goon:hover,
.el-button--goon.is-disabled {
  background: #9c9df1;
  border-color: #9c9df1;
  color: #fff;
}
</style>