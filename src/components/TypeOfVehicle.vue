<script setup>

import WorkFlow from "@/components/WorkFlow.vue";
import PageTitle from "@/components/PageTitle.vue";
import {useStore} from "@/store/store.js";
import {RouterPath} from "@/router/index.js";
import {ref} from "vue";


const store = useStore();

store.setHistory({
  next:RouterPath.Model,current:RouterPath.TypeOfvehicle
})

// const car = ref(store.Fields.type)
const carClick = () => {
  console.log("koooo",store.Fields.type)
  store.Fields.type = 'car'
}

console.log(store.Fields.type)
</script>

<template>
  <WorkFlow>
    <PageTitle title="What Kind of Vehicle do you Want?" />
    <div class="type-of-vehicle">
      <div @change="carClick"  class="vehicle">
        <img class="img" src="@/assets/img/car-compact-svgrepo-com.svg">
        <p>Car</p>
      </div>
      <div class="vehicle">
        <img class="img" src="@/assets/img/motorbike-motorcycle-svgrepo-com.svg">
        <p>Bike</p>
      </div>
    </div>
  </WorkFlow>

</template>

<style scoped>

</style>