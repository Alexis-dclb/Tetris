import * as THREE from 'three'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import Debug from './utils/Debug.js'
import Light from './World/Light.js'
import Sizes from "./utils/Sizes.js"
import Time from './utils/Time.js'
import World from './World/World.js'
import PhysicWorld from './PhysicWorld/PhysicWorld.js'
let instance = null

export default class Experience {
  constructor(_canvas) { 

    if (instance) {
      return instance
    } else {
      instance = this
    }

    this.canvas = _canvas
    
    this.debug = new Debug()
    this.scene = new THREE.Scene
    this.sizes = new Sizes()
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.time = new Time()
    this.physicWorld = new PhysicWorld()
    this.world = new World()
    this.light = new Light()

    this.scene.background = new THREE.Color('#c62e51')
    
    this.sizes.on('resize', () =>
    {
      this.resize()
    })

     // Time tick event
    this.time.on('tick', () =>
    {
      this.update()
    })
  }
  
  resize() {
    this.camera.resize()
    this.renderer.resize()
  }

  update()
  {
    this.camera.update()
    this.renderer.update()
    this.physicWorld.update()
  }

}