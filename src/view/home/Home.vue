<template>
  <div id="home" :class="theme[currentIndex]">
    <div id="rain-fall" ref="fall"></div>
    <el-row type="flex" justify="center">
        <el-col :span="9">
          <div class="left" ref="left">
            <div class="light"></div>
            <div class="icon" ref="icon">
              <meteors class="meteors"/>
              <div class="moon"></div>
              <div class="sun"></div>
              <div class="cloud"></div>
              <!-- <div class="rain"></div> -->
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
              <div class="wel-text">{{contentText[currentIndex]}}</div>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="right">
            <div class="theme-switch" title="切换主题">
              <div class="iconfont" :class="iconTheme[currentIndex]" @click="themeSwitch"></div>
            </div>
            <div class="rt-inner" >
              <div class="title"
              v-motion
              :initial="{
                opacity: 0,
                y: 100,
              }"
              :enter="{
                opacity: 1,
                y: 0,
              }"
              >欢迎登录</div>
              <el-form :model="userInfo" ref="userInfo" label-width="100px">
                <el-form-item
                  prop="username"
                  label="用户名"
                  :rules="[
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                  ]"
                  v-motion
                  :initial="{
                    opacity: 0,
                    y: 100,
                  }"
                  :enter="{
                    opacity: 1,
                    y: 0,
                  }"
                >
                  <el-input class="input1" v-model="userInfo.username" clearable></el-input>
                </el-form-item>
                <el-form-item
                  prop="password"
                  label="密码"
                  :rules="[
                    { required: true, message: '请输入密码', trigger: 'blur' }
                  ]"
                  v-motion
                  :initial="{
                    opacity: 0,
                    y: 100,
                  }"
                  :enter="{
                    opacity: 1,
                    y: 0,
                  }"
                >
                  <el-input class="input1" v-model="userInfo.password" clearable show-password></el-input>
                </el-form-item>
                <div class="lo-btn">
                  <el-button @click="load('userInfo')" type="goon"
                  v-motion
                  :initial="{
                    opacity: 0,
                    y: 100,
                  }"
                  :enter="{
                    opacity: 1,
                    y: 0,
                  }"
                  >登录</el-button>
                  <el-button @click="logon('userInfo')" type="text"
                  v-motion
                  :initial="{
                    opacity: 0,
                    y: 100,
                  }"
                  :enter="{
                    opacity: 1,
                    y: 0,
                  }"                  
                  >注册</el-button>
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
      iconTheme: ['icon-yejianmoshishenyemoshiyueliang', 'icon-taiyang', 'icon-duoyun'],
      theme: ['dark-theme', 'light-theme', 'grey-theme'],
      contentText: [
        '我们眼中的星星像幽灵, 星星眼中的我们也像幽灵',
        '宇宙很大, 生活更大',
        '世界既不黑也不白, 而是一道精致的灰'
      ]
    }
  },
  mounted() {
    let fall = this.$refs.fall;
    function rainFall() {
      setTimeout(() => {
        let el = document.createElement('div');
        el.setAttribute('class', 'rain');
        el.style.left = parseInt(Math.random()*35+11) + '%';
        fall.appendChild(el);
        setTimeout(() => {
          fall.removeChild(el);
        },800)
        rainFall();
      },20)
    }
    rainFall()
  },
  methods: {
    themeSwitch() {
      if(this.currentIndex>=2) {
        this.currentIndex = 0
      }else {
        this.currentIndex++
      }
      this.$refs.fall.style.display = 'none'
      if(this.currentIndex===2) {
        this.$refs.fall.style.display = 'inline-block'
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

<style lang='scss' scoped>
@import url('~@/assets/css/font.css');

#rain-fall{
  display: none;
}

#home {
  min-width: 1500px;
  // background-color: var(--color-background);
  height: 100vh;
  overflow: hidden;
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
  position: absolute;
  top: -30px;
}
.building {
  width: 100px;
  height: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: wrap;
}
.room {
  width: 40px;
  height: 20px;
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
  // color: var(--color-text);
  text-align: center;
}
.el-form {
  width: 90%;
  margin-top: 120px;
  //这里/deep/生效,>>>不能生效
  .el-input /deep/ .el-input__inner {
    border: none;
    border-bottom: 1px solid;
    border-radius: 0;
  }
}

.lo-btn
.el-button--goon,
.el-button--goon:focus,
.el-button--goon.is-active,
.el-button--goon.is-disabled:active,
.el-button--goon:active {
  width: 150px;
  position: relative;
  border-radius: 999em;
  left: 42%;
}
.lo-btn {
  position: relative;
  top: 10px;
}
.lo-btn .el-button--text {
  // color: var(--color-text);
  position: absolute;
  right: 0px;
  top: -30px;
}
.icon {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
}

//以下是三种主题
.dark-theme {
  color: var(--color-text);
  background-color: var(--color-background);
  .lo-btn .el-button--text {
    color: var(--color-text);
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
  }
  .lo-btn
  .el-button--goon.is-disabled:hover,
  .el-button--goon:hover,
  .el-button--goon.is-disabled {
    background: #9c9df1;
    border-color: #9c9df1;
    color: #fff;
  }
  .el-form {
    .el-form-item /deep/ .el-form-item__label{
      color: var(--color-text);
    }
    .el-input /deep/ .el-input__inner {
      border-bottom-color: var(--color-text);
    }
  }
  .left {
    background-color: var(--color-text);
  }
  .icon {
    .building-group {
      .building {
        background-color: #836BB5;
        &::before {
          background-color: #836BB5;
        }
        .room {
          background-color: rgba(245, 242, 75, 0.877);
          box-shadow: 0 0 10px rgba(245, 242, 75, 0.877);
        }
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
    .meteors {
      display: block;
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
  }
  
}
.light-theme {
  color: var(--color-light);
  background-color: var(--color-background);
  .lo-btn .el-button--text {
    color: var(--color-light);
  }
  .lo-btn
  .el-button--goon,
  .el-button--goon:focus,
  .el-button--goon.is-active,
  .el-button--goon.is-disabled:active,
  .el-button--goon:active {
    background: var(--color-light);
    border-color: var(--color-light);
    color: #fff;
  }
  .lo-btn
  .el-button--goon.is-disabled:hover,
  .el-button--goon:hover,
  .el-button--goon.is-disabled {
    background: var(--color-light);
    border-color: var(--color-light);
    color: #fff;
  }
  .el-form {
    .el-form-item /deep/ .el-form-item__label{
      color: var(--color-light);
    }
    .el-input /deep/ .el-input__inner {
      border-bottom-color: var(--color-light);
    }
  }
  .left {
    background-image: linear-gradient(#fff,#CAFDFE);
    .welcome {
      color: var(--color-light);
    }
  }
  .icon {
    .building-group {
      .building {
        background-color: #556C8F;
        &::before {
          background-color: #556C8F;
        }
        .room {
          background-color: #96a6ad;
          box-shadow: 0 0 10px #96a6ad;
        }
      }
    }
    .sun {
      width: 100px;
      height: 100px;
      background-image: radial-gradient(100px at center,rgb(255, 53, 53),#FCFE26);
      box-shadow: 0 0 50px #FCFE26;
      position: absolute;
      border-radius: 50%;
      top: 50px;
      left: 100px;
    }
    .meteors {
      display: none;
    }
  }
}
.grey-theme {
  color: var(--color-grey);
  background-color: var(--color-background);
  .lo-btn .el-button--text {
    color: var(--color-grey);
  }
  .lo-btn
  .el-button--goon,
  .el-button--goon:focus,
  .el-button--goon.is-active,
  .el-button--goon.is-disabled:active,
  .el-button--goon:active {
    background: var(--color-grey);
    border-color: var(--color-grey);
    color: #fff;
  }
  .lo-btn
  .el-button--goon.is-disabled:hover,
  .el-button--goon:hover,
  .el-button--goon.is-disabled {
    background: var(--color-grey);
    border-color: var(--color-grey);
    color: #fff;
  }
  .el-form {
    .el-form-item /deep/ .el-form-item__label{
      color: var(--color-grey);
    }
    .el-input /deep/ .el-input__inner {
      border-bottom-color: var(--color-grey);
    }
  }
  .left {
    background-image: linear-gradient(#86909cb6,#fff);
    .welcome {
      color: var(--color-grey);
    }
  }
  .icon {
    .cloud,.cloud::before {
      $color-cloud: #86909c;
      width: 50px; 
      height: 50px; 
      border-radius: 50%; 
      background-color: $color-cloud; 
      box-shadow: $color-cloud 65px -15px 0 -5px,
                  $color-cloud 25px -25px, 
                  $color-cloud 30px 10px,
                  $color-cloud 60px 15px 0 -10px,
                  $color-cloud 85px 5px 0 -5px;
      position: absolute;
      top: 100px;
    }
    .cloud::before {
      content: '';
      top: -50px;
      left: 300px;
    }
    
    // .rain {
    //   display: inline-block;
    //   position: absolute;
    //   top: 0;
    //   left: 50px;
    //   width: 5px;
    //   height: 5px;
    //   background: radial-gradient(#8fd4fc, #52b1f2, #0599fc);
    //   border-radius: 999em;
    //   transform: rotateY(45deg);
    //   animation: rainDrop 0.8s infinite;
    //   z-index: 999;
    // }
    // @keyframes rainDrop {
    //   0% {top:5%;}
    //   10% {top:10%;}
    //   20% {top:20%;}
    //   30% {top:30%;}
    //   40% {top:40%;}
    //   50% {top:50%;}
    //   60% {top:60%;}
    //   70% {top:70%;}
    //   80% {top:80%;}
    //   90% {top:90%;}
    //   100% {top:95%;}
    // }
    .building-group {
      .building {
        background-color: #a9aeb8;
        &::before {
          background-color: #a9aeb8;
        }
        .room {
          background-color: #c5c5c5;
          box-shadow: 0 0 10px #bebebe;
        }
      }
    }
    .meteors {
      display: none;
    }
  }
}


</style>