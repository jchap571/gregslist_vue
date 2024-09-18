<script setup>
import { AppState } from "@/AppState.js";
import HouseListing from "@/components/globals/HouseListing.vue";
import { housesService } from "@/services/HousesService.js";
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from "vue";







const houses = computed(() => AppState.houses)

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
        <section class="row">
          <div id="house-form" class="col-12">
            <form>
              <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingInput" placeholder="Number of bedrooms" required>
                <label for="floatingInput">Bedrooms</label>
              </div>
              <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingInput" placeholder="Number of Bathrooms" required>
                <label for="floatingInput">Bathrooms</label>
              </div>
              <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingInput" placeholder="Floors" required>
                <label for="floatingInput">Levels</label>
              </div>
              <div class="form-floating mb-3">
                <input type="number" class="form-control" id="floatingInput" placeholder="Year Built" required>
                <label for="floatingInput">Year Built</label>
              </div>
              <div class="">
                <label for="imgUrl">House Image</label>
                <input id="imgUrl" name="imgUrl" type="string" required maxlength="2000" placeholder="House Image...">
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="Price" required>
                <label for="floatingInput">Price</label>
              </div>
              <div class="form-floating">
                <textarea class="form-control" placeholder="Describe your House" id="floatingTextarea2"
                  style="height: 100px"></textarea>
                <label for="floatingTextarea2">Describe your House</label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </section>

      </div>
    </section>
  </div>

  <section class="row">
    <div v-for="house in houses" :key="house.id" class="col-12 mb-3">
      <HouseListing :houseProp="house" />

    </div>




  </section>













</template>


<style lang="scss" scoped></style>