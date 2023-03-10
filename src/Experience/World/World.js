import Experience from "../Experience";
import Cube from "./Cube";
import Floor from "./Floor";
import GeometryI from "./GeometryI";
import GeometryL from "./GeometryL";
import GeometryO from "./GeometryO";
import GeometryS from "./GeometryS";
import GeometryT from "./GeometryT";
import GeometryZ from "./GeometryZ";
import Wall from "./Wall";

export default class World {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene

    const height = 8
    this.geometryZ = new GeometryZ(height)
    /* this.geometryL = new GeometryL()
    this.geometryS = new GeometryS()
    this.geometryT = new GeometryT()
    this.geometryI = new GeometryI()
    this.geometryO = new GeometryO()  */


    this.floor = new Floor()
    
    
    this.wall = new Wall({ x: 0.1, y: 1.5, z: 0.5001 }, Math.PI) //devant
    this.wall = new Wall({ x: 5, y: 1.5, z: 0.1 }, -Math.PI / 2) // droite
    this.wall = new Wall({ x: -5, y: 1.5, z: 0.1 }, Math.PI / 2) // gauche
    this.wall = new Wall({ x: 0.1, y: 1.5, z: -0.5001 }, 0) //derriere


    this.possibleGeometry = [GeometryS, GeometryL, GeometryT, GeometryZ, GeometryI, GeometryO];
    
    window.addEventListener('click', () => {
/*       console.log(Math.max(...this.scene.children.map(group => group.position.y)));
*/
this.height = Math.floor(Math.max(...this.scene.children.map(group => group.position.y)))
this.geometry = new this.possibleGeometry[Math.floor(Math.random() * this.possibleGeometry.length)](this.height)
/*     this.geometryZ = new GeometryT(this.height)
 */
    })

    window.addEventListener('touchstart', () => {
      this.height = Math.floor(Math.max(...this.scene.children.map(group => group.position.y)))

      this.geometry = new this.possibleGeometry[Math.floor(Math.random() * this.possibleGeometry.length)](this.height)
    })
  }
}

