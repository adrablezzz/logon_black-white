<template>
<div id="new"
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
  测试vueuse/motion
</div>
</template>

<script>
export default {
  components: {

  },
  name: 'New',
  
}
</script>

<style scoped>

</style>