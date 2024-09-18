<script setup>
import { House } from "@/models/House.js";
import { housesService } from "@/services/HousesService.js";
import { logger } from "@/utils/Logger.js";
import Pop from "@/utils/Pop.js";
import { AppState } from "@/AppState.js";





const props = defineProps({
  houseProp: { type: House, required: true }


})

const account = (() => AppState.account)


async function deleteHouse() {
  try {
    const wantsToDelete = await Pop.confirm(`Are you sure you'd like to delete this house?`)

    if (!wantsToDelete) {
      return
    }
    console.log('house id', props.houseProp.id)

    await housesService.deleteHouse(props.houseProp.id)

  }
  catch (error) {
    Pop.error(error);
    logger.error(error)
  }



}
</script>


<template>
  <div class="card house-listing p-5">
    <div class="d-flex  mx-3 my-2 ">

      <div class="col-6 col-md-4 mt-5">
        <img :src="houseProp.imgUrl" alt="" class="img-fluid">
      </div>
      <div class="col-6 col-md-8 px-3">
        <h2>{{ houseProp.bedrooms }} Bedroom Home built in {{ houseProp.year }} </h2>
        <p>Description: {{ houseProp.description }}</p>
        <hr>
        <h3>${{ houseProp.price }}</h3>
      </div>
    </div>
    <div class="text-end">
      <button v-if="houseProp.creatorId == account?.id" @click="deleteHouse()" class="btn btn-danger mb-3">Delete
        Listing</button>

    </div>
  </div>


</template>


<style lang="scss" scoped>
img {
  height: 30vh;
  width: 100%;
  object-fit: cover;
  object-position: center;





}


.house-listing {
  max-height: 50vh;
  box-shadow: 1px 3px rgb(66, 65, 65);
}
</style>