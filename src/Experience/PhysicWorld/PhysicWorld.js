import * as CANNON from 'cannon-es'
import Experience from '../Experience';
import ContactMaterial from './ContactMaterial.js'
import CannonDebugger from 'cannon-es-debugger'

export default class PhysicWorld {
  constructor() {
    this.contactMaterial = new ContactMaterial()
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.time = this.experience.time
    this.objectsToUpdate = []
    this.world = new CANNON.World({
      gravity: new CANNON.Vec3(0, -15.82, 0),
      frictionGravity: 1,
      allowSleep: true,
    })

    this.world.addContactMaterial(this.contactMaterial.contactMaterial)
    this.world.addContactMaterial(this.contactMaterial.contactWallMaterial)

    this.cannonDebugger = new CannonDebugger(this.scene, this.world)
  }

  update() {
    this.world.fixedStep(1 / 60, this.time.delta, 3)
/*     this.cannonDebugger.update() // Update the CannonDebugger meshes
 */
    if (this.objectsToUpdate) {
      for (const object of this.objectsToUpdate) {
        object.group.position.copy(object.body.position)
        object.group.quaternion.copy(object.body.quaternion)
    } 
    }
  }
}