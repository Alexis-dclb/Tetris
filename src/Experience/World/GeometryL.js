import * as THREE from 'three'
import Experience from '../Experience'
import * as CANNON from 'cannon-es'
import Cube from './Cube'


export default class GeometryL {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.physicWorld = this.experience.physicWorld
    this.objectsToUpdate = this.experience.physicWorld.objectsToUpdate
    this.color = "#c0cc23"
    

    this.group = new THREE.Group()
    this.cube1 = new Cube({x:0,y:0,z:0}, this.color)
    this.cube2 = new Cube({x:1,y:0,z:0}, this.color)
    this.cube3 = new Cube({x:2,y:0,z:0}, this.color)
    this.cube4 = new Cube({x:2,y:1,z:0}, this.color) 

    this.setPhysicShape()
    this.setPhysicBody()
    
    this.group.add(this.cube1.mesh, this.cube2.mesh, this.cube3.mesh, this.cube4.mesh)
    this.scene.add(this.group) 
}


  setPhysicShape() {
    this.cubeShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5))
  }

  setPhysicBody() {
    this.cubeBody = new CANNON.Body({
      mass: 1,
      material: this.physicWorld.contactMaterial.defaultMaterial,
    })
    this.cubeBody.addShape(this.cubeShape)
    this.cubeBody.addShape(this.cubeShape, new CANNON.Vec3(1, 0, 0))
    this.cubeBody.addShape(this.cubeShape, new CANNON.Vec3(2, 0, 0))
    this.cubeBody.addShape(this.cubeShape, new CANNON.Vec3(2, 1, 0))
    this.cubeBody.position.set(0,8,0)
    this.physicWorld.world.addBody(this.cubeBody)
    this.objectsToUpdate.push({ group: this.group, body: this.cubeBody })
    
  }

}