import * as CANNON from 'cannon-es'

export default class ContactMaterial {
  constructor() {
    this.defaultMaterial = new CANNON.Material('default')
    this.wallMaterial = new CANNON.Material('wall')

    this.contactMaterial = new CANNON.ContactMaterial(
      this.defaultMaterial, this.defaultMaterial,
      {
        friction: 0.2,
          restitution: 0.2
      }
    )
    this.contactWallMaterial = new CANNON.ContactMaterial(
      this.wallMaterial, this.defaultMaterial,
      {
          friction: 0,
          restitution: 0
      }
    )
  }
}