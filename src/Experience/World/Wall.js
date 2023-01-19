import * as THREE from 'three'
import Experience from '../Experience'
import * as CANNON from 'cannon-es'

export default class Wall {
  constructor({x,y,z}, rotation) {
    this.positionX = x
    this.positionY = y
    this.positionZ = z
    this.rotation = rotation
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.physicWorld = this.experience.physicWorld

    this.setPhysicShape()
    this.setPhysicBody()
  }

  setPhysicShape() {
    this.planeShape = new CANNON.Plane()
  }

  setPhysicBody() {
    this.planeBody = new CANNON.Body({
      mass: 0,
      shape: this.planeShape,
      material: this.physicWorld.contactMaterial.wallMaterial,
    })

    this.planeBody.position.set(this.positionX,this.positionY,this.positionZ)
    this.planeBody.quaternion.setFromAxisAngle(
      new CANNON.Vec3(0, 1, 0),
      this.rotation
    )
    this.physicWorld.world.addBody(this.planeBody)
  }
}