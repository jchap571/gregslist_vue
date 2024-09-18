import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { House } from "@/models/House.js"
import { AppState } from "@/AppState.js"



class HousesService {

  async getHouses() {
    const response = await api.get('api/houses')
    logger.log('Got Houses', response.data)
    const newHouses = response.data.map(housePOJO => new House(housePOJO))
    AppState.houses = newHouses
  }



  async createHouse(houseData) {
    const response = await api.post('api/houses', houseData)
    logger.log('Creating house listing!')
    const newHouse = new House(response.data)
    AppState.houses.push(newHouse)
  }
}



export const housesService = new HousesService()