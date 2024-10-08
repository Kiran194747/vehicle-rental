<script setup>
defineProps({
  title:{
    type:String,
    required:false
  }
})

</script>

<template>
<div class="page-title">{{title}}</div>
</template>

<style scoped>

</style>