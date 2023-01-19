import * as THREE from 'three'
import Experience from '../Experience'
import * as CANNON from 'cannon-es'

export default class Floor {
  constructor() {

    this.experience = new Experience()
    this.scene = this.experience.scene
    this.physicWorld = this.experience.physicWorld

    this.setGeometry()
    this.setMaterial()
    this.setMesh()

    this.setPhysicShape()
    this.setPhysicBody()
  }

  setGeometry() {
    this.planeGeometry = new THREE.PlaneGeometry(10, 1, 1)
  }

  setMaterial() {
    this.planeMaterial = new THREE.MeshStandardMaterial({ color: '#ffffff' })
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.planeGeometry, this.planeMaterial)
    this.mesh.rotation.x = -Math.PI /2
    this.mesh.position.y = -1
    this.mesh.receiveShadow = true
    this.scene.add(this.mesh)
  }

  setPhysicShape() {
    this.planeShape = new CANNON.Plane()
  }

  setPhysicBody() {
    this.planeBody = new CANNON.Body({
      mass: 0,
      shape: this.planeShape,
      material: this.physicWorld.contactMaterial.defaultMaterial
    })
    this.planeBody.position.set(0,-1,0)
    this.planeBody.quaternion.setFromAxisAngle(
      new CANNON.Vec3(-1, 0, 0),
      Math.PI * 0.5
    )
    this.physicWorld.world.addBody(this.planeBody)
  }
}