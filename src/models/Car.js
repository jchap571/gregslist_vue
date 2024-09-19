export class Car {
  constructor(data) {
    this.id = data.id
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.color = data.color || '#7ed957'
    this.engineType = data.engineType
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creatorId = data.creatorId
    // this.creator = data.creator // --> {name: 'jerms', picture: '...', id: '...'}
    this.creatorName = data.creator.name
    this.creatorPicture = data.creator.picture
  }

  get priceAsCurrency() {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.price)
  }
}
