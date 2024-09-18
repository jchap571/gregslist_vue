<script setup>
import { House } from "@/models/House.js";





defineProps({
  houseProp: { type: House, required: true }


})
</script>


<template>
  <div class="card house-listing">
    <div class="d-flex  mx-3 my-3 ">

      <div class="col-md-4">
        <img :src="houseProp.imgUrl" alt="" class="img-fluid">
      </div>
      <div class="col-md-8 px-3">
        <h2>{{ houseProp.bedrooms }} Bedroom Home built in {{ houseProp.year }} </h2>
        <p>Description: {{ houseProp.description }}</p>
        <hr>
        <h3>${{ houseProp.price }}</h3>
      </div>
    </div>
    <div class="d-flex align-items-end">
      <button class="btn btn-danger mb-3">Delete Listing</button>

    </div>
  </div>


</template>


<style lang="scss" scoped>
img {
  margin-top: 5px;
  margin-left: 5px;
  height: 100%;
  width: 100%;
  aspect-ratio: 1/1;




}


.house-listing {
  min-height: 20vh;
  box-shadow: 1px 3px rgb(66, 65, 65);
}
</style>