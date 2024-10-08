<script setup>

import router from "@/router/index.js";
import {useStore} from "@/store/store.js";


const store = useStore()
const goToNextPage= () =>{
  console.log('kiran:',store.nextPageIs)
  router.push(store.nextPageIs)
}

// const goToBackPage = () => {
//   console.log("back:",store.prevPageIs  )
//   router.push(store.prevPageIs)
// }


</script>

<template>
  <div class="main-class">
    <div class="page-content flex-1 flex items-center content-center flex-col justify-center">
      <slot></slot>
      <hr style="color: white; margin-top: 30px">
     <div class="buttons">
       <button>Back</button>
      <button @click="goToNextPage">Next</button>
     </div>
    </div>


  </div>
</template>

<style scoped>

</style>