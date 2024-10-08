<script setup>

import WorkFlow from "@/components/WorkFlow.vue";
import jsondata from "@/assets/data.json"

const jsonData = jsondata;
console.log(jsonData)
</script>

<template>
<WorkFlow>
  <label>select car brand</label>
 <select class="model-type">
   <option disabled selected value="null"><p class="nanu">select car</p></option>
   <option v-for="car in jsonData.car" :value="car.brand">
     {{ car.brand }}
   </option>
 </select>
  <label>select model</label>
  <select>
    <option></option>
  </select>


</WorkFlow>
</template>

<style scoped>

</style>