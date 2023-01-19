import * as THREE from 'three'
import Experience from '../Experience'
import * as CANNON from 'cannon-es'

export default class Cube {
  constructor({ x, y, z }, color) {
    this.color = color
    this.position = {x,y,z}
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.physicWorld = this.experience.physicWorld
    this.objectsToUpdate = this.physicWorld.objectsToUpdate
    this.setGeometry()
    this.setMaterial()
    this.setMesh()
    
   /*  this.setPhysicShape()
    this.setPhysicBody() */
    
  }

  setGeometry() {
    this.cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
  }

  

  setMaterial() {
    this.cubeMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.color)
    })
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.cubeGeometry, this.cubeMaterial)
    this.mesh.castShadow = true
    this.mesh.receiveShadow = true
    this.mesh.position.set(this.position.x, this.position.y, this.position.z)
  }

  setPhysicShape() {
    this.cubeShape = new CANNON.Box(new CANNON.Vec3(0.5,0.5,0.5))
  }

  setPhysicBody() {
    this.cubeBody = new CANNON.Body({
      mass: 1,
      shape: this.cubeShape,
/*       material: this.physicWorld.contactMaterial.defaultMaterial,
 */    })
/*     this.cubeBody.position.set(this.position.x, this.position.y, this.position.z)
 */    this.physicWorld.world.addBody(this.cubeBody)
    this.objectsToUpdate.push({ mesh: this.mesh, body: this.cubeBody })
    
  }


}