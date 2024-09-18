<script setup>
import { housesService } from "@/services/HousesService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { ref } from "vue";



const editableHouseData = ref({
  bedrooms: 0,
  bathrooms: 0,
  levels: 0,
  year: 1800,
  imgUrl: '',
  price: 0,
  description: '',

})



async function createHouse() {
  try {
    console.log('from the FORM');

    const houseData = editableHouseData.value
    await housesService.createHouse(houseData)
    editableHouseData.value = {
      bedrooms: 0,
      bathrooms: 0,
      levels: 0,
      year: 1800,
      imgUrl: '',
      price: 0,
      description: '',

    }
  }
  catch (error) {
    Pop.error(error);
    logger.log(error)
  }
}



</script>


<template>


  <form @submit.prevent="createHouse()">
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.bedrooms" type="number" class="form-control" id="floatingInput"
        placeholder="Number of bedrooms" required>
      <label for="floatingInput">Bedrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.bathrooms" type="number" class="form-control" id="floatingInput"
        placeholder="Number of Bathrooms" required>
      <label for="floatingInput">Bathrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.levels" type="number" class="form-control" id="floatingInput"
        placeholder="Floors" required>
      <label for="floatingInput">Levels</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.year" type="number" class="form-control" id="floatingInput"
        placeholder="Year Built" required>
      <label for="floatingInput">Year Built</label>
    </div>
    <div class="">
      <label for="imgUrl">House Image</label>
      <input v-model="editableHouseData.imgUrl" class="mx-3 my-2" id="imgUrl" name="imgUrl" type="string" required
        maxlength="2000" placeholder="House Image...">
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.price" type="text" class="form-control" id="floatingInput" placeholder="Price"
        required>
      <label for="floatingInput">Price</label>
    </div>
    <div class="form-floating">
      <textarea class="form-control" placeholder="Describe your House" id="floatingTextarea2"
        style="height: 100px"></textarea>
      <label for="floatingTextarea2">Describe your House</label>
    </div>
    <button class="my-3 bg-success" type="submit">Submit</button>
  </form>




</template>


<style lang="scss" scoped></style>