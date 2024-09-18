<script setup>
import { housesService } from "@/services/HousesService.js";
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';



onMounted(() => {
  getHouses()
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

</script>








<template>
  <div class="container">
    <section class="row">
      <h1>Houses</h1>
    </section>
    <section class="row my-3">
      <div class="col-12">
        <!-- stub for house form starts -->

      </div>
    </section>
  </div>

  <section class="row">
    <div class="col-12 mb-3">


    </div>




  </section>













</template>


<style lang="scss" scoped></style>