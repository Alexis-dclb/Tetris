import * as THREE from 'three'
import Experience from '../Experience'


export default class Light {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.setDirectionalLight() 
    this.setAmbientLight() 
  }

  setDirectionalLight() {
    this.directionalLight = new THREE.DirectionalLight('#ffffff', 3)
    this.directionalLight.position.set(2, 2, 5)
    this.directionalLight.castShadow = true
    this.directionalLight.shadow.camera.far = 15
    this.directionalLight.shadow.mapSize.set(1024, 1024)
    this.directionalLight.shadow.normalBias = 0.05
    this.scene.add(this.directionalLight)
  }

  setAmbientLight() {
    this.ambientLight = new THREE.AmbientLight('#ffffff', 2)
    this.scene.add(this.ambientLight)
  }
}