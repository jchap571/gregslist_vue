<script setup>
import { AppState } from "@/AppState.js";
import HouseListing from "@/components/globals/HouseListing.vue";
import { housesService } from "@/services/HousesService.js";
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted, ref } from "vue";







const houses = computed(() => AppState.houses)

onMounted(() => {
  getHouses()
})

const editableHouseData = ref({
  bedrooms: 0,
  bathrooms: 0,
  levels: 0,
  year: 1800,
  imgUrl: '',
  price: 0,
  description: '',



})

async function getHouses() {
  try {
    await housesService.getHouses()
  }
  catch (error) {
    Pop.error(error);
    logger.error(error)
  }

}


async function createHouse() {
  try {
    await housesService.createHouse()
  }
  catch (error) {
    Pop.error(error);
    logger.error(error)
  }
}
</script>








<template>
  <div class="container">
    <section class="row">
      <h1>Houses</h1>
    </section>


    <section class="row">
      <HouseForm />
    </section>
  </div>







  <section class="row">
    <div v-for="house in houses" :key="house.id" class="col-12 mb-3">
      <HouseListing :houseProp="house" />

    </div>




  </section>













</template>


<style lang="scss" scoped></style>