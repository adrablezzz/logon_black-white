<template>
  <div id="meteors">
    <div class="meteor meteor1"></div>
    <div class="meteor meteor2"></div>
    <div class="meteor meteor3"></div>
  </div>
</template>

<script>
export default {
  name: 'Meteors',
  mounted() {
    const time1 = Math.floor(Math.random()*30) + 's'
    const time2 = Math.floor(Math.random()*30) + 's'
    const time3 = Math.floor(Math.random()*30) + 's'
    const meteors = document.querySelectorAll('.meteor')
    meteors[0].style['animation-delay'] = time1
    meteors[1].style['animation-delay'] = time2
    meteors[2].style['animation-delay'] = time3
  },
}
</script>

<style scoped>
@keyframes falling1 {
  0% {
    top: -100px;
    left: -100px;
  }
  100% {
    top: 100%;
    left: 100%;
  }
}
@keyframes falling2 {
  0% {
    top: 100px;
    left: -100px;
  }
  100% {
    top: 100%;
    left: 95%;
  }
}
@keyframes falling3 {
  0% {
    top: 200px;
    left: -100px;
  }
  100% {
    top: 100%;
    left: 105%;
  }
}
.meteor {
  width: 2px;
  height: 50px;
  background: linear-gradient(-45deg, #ffffff, rgba(0, 0, 255, 0));
  border-radius: 999em;
  position: absolute;
  top: -100px;
  left: -100px;
  z-index: 3;
  transform: rotate(-45deg);
}
.meteor1 {
  animation: falling1 6s infinite ease-in;
  animation-delay: var(--random-time);
}
.meteor2 {
  animation: falling2 7s infinite ease-in;
  animation-delay: var(--random-time);

}
.meteor3 {
  animation: falling3 8s infinite ease-in;
  animation-delay: var(--random-time);

}
</style>