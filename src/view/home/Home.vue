<template>
  <div id="home">
    <el-row type="flex" justify="center">
        <el-col :span="9">
          <div class="left">
            <div class="light"></div>
            <div class="icon">
              <meteors/>
              <div class="moon"></div>
              <div class="star star1"></div>
              <div class="star star2"></div>
              <div class="star star3"></div>
              <div class="building-group">
                <div class="building" v-for="building in 2">
                  <div class="room" v-for="room in 12"></div>
                </div>
              </div>
            </div>
            <div class="welcome">
              <div class="wel-title">
                欢迎回来!
              </div>
              <div class="wel-text">文字内容</div>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="right">
            <div class="theme-switch">
              <div class="iconfont" :class="whichTheme[currentIndex]" @click="themeSwitch"></div>
            </div>
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
                  <el-button @click="logon('userInfo')" type="text">注册</el-button>
                </div>
              </el-form>
            </div>
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import Meteors from '@/components/common/meteors/Meteors'
export default {
  name: 'Home',
  components: {
    Meteors
  },
  data() {
    return {
      userInfo: {
        username: '',
        password: ''
      },
      currentIndex: 0,
      whichTheme: [
        'icon-yejianmoshishenyemoshiyueliang',
        'icon-taiyang',
        'icon-duoyun'
      ]
    }
  },
  methods: {
    themeSwitch() {
      if(this.currentIndex>=2) {
        this.currentIndex = 0
      }else {
        this.currentIndex++
      }
    },
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

<style scoped>
@import url('~@/assets/css/font.css');
#app {
  min-width: 1500px;
}
.el-row {
  height: 83vh;
  margin-top: 8vh;
}
.el-row .el-col {
  height: 83vh;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.left {
  width: 100%;
  height: 100%;
  background-color: var(--color-text);
  position: relative;
  overflow: hidden;
}
.welcome {
  color: #fff;
  margin-top: 30%;
  text-align: center;
  position: relative;
  z-index: 2;
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
@keyframes breath {
  0%,100% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 1);
  }
  50% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0);
  }
}
.moon {
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: transparent;
  z-index: 1;
  border-radius: 50%;
  box-shadow: 30px 30px 0 0 cyan;
  top: 0px;
  left: 100px;
}
.star,.star::before,.star::after {
  z-index: 2;
  width: 5px;
  height: 30px;
  border-radius: 50% 50%;
  background:linear-gradient(transparent,rgb(255, 255, 255),transparent);
  box-shadow: 0 0 10px rgba(255, 255, 255, 1);
  animation: breath 7s infinite;
}
.star1 {
  position: absolute;
  top: 50px;
  left: 50px;
}
.star2 {
  position: absolute;
  top: 150px;
  left: 75px;
}
.star3 {
  position: absolute;
  top: 100px;
  left: 500px;
}
.star::before,.star::after {
  content: '';
  position: absolute;
}
.star::before {
  transform: rotate(120deg);
}
.star::after {
  transform: rotate(240deg);
}
.building-group {
  width: 100%;
  height: 300px;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
}
.building::before {
  content: '';
  width: 30px;
  height: 30px;
  background-color: #836BB5;
  position: absolute;
  top: -30px;
}
.building {
  width: 100px;
  height: 300px;
  background-color: #836BB5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: wrap;
}
@keyframes roomLight {
  0%,100% {
    background-color: rgba(245, 242, 75, 0.877);
    box-shadow: 0 0 10px rgba(245, 242, 75, 0.877);
  }
  50% {
    background-color: #B4A4CF;
    box-shadow: 0 0 10px #b4a4cfcb;
  }
}
.room {
  width: 40px;
  height: 20px;
  background-color: rgba(245, 242, 75, 0.877);
  box-shadow: 0 0 10px rgba(245, 242, 75, 0.877);
  animation: roomLight 10s infinite;
}

.right {
  width: 100%;
  background-color: #fff;
}
.theme-switch {
  position: absolute;
  top: 10px;
  right: 12%;
}
.theme-switch .iconfont {
  font-size: 25px;
  color: #666;
}
.rt-inner {
  width: 60%;
  height: 500px;
  background-color: #fff;
  margin: auto;
}
.title {
  font-size: 40px;
  color: var(--color-text);
  text-align: center;
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
.lo-btn
.el-button--goon.is-disabled:hover,
.el-button--goon:hover,
.el-button--goon.is-disabled {
  background: #9c9df1;
  border-color: #9c9df1;
  color: #fff;
}
.lo-btn {
  position: relative;
}
.lo-btn .el-button--text {
  color: var(--color-text);
  position: absolute;
  right: 0px;
  top: -20px;
}
</style>