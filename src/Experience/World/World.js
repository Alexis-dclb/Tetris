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

    
    this.geometryZ = new GeometryZ()
      /* this.geometryL = new GeometryL()
      this.geometryS = new GeometryS()
      this.geometryT = new GeometryT()
      this.geometryI = new GeometryI()
      this.geometryO = new GeometryO()  */
    this.colors = [
      '#c0cc23',
      '#de495d',
      '#49dbc9',      
      '#ef9235',      
      '#6f58af',      
      '#bf4bbf',      
    ]

    this.floor = new Floor()
    
    
    this.wall = new Wall({x:0.1,y:1.5,z:0.5001}, Math.PI) //devant
    this.wall = new Wall({x:5,y:1.5,z:0.1}, -Math.PI / 2) // droite
    this.wall = new Wall({x:-5,y:1.5,z:0.1}, Math.PI / 2) // gauche
    this.wall = new Wall({x:0.1,y:1.5,z:-0.5001}, 0) //derriere


    this.possibleGeometry = [GeometryS,GeometryL, GeometryT, GeometryZ, GeometryI, GeometryO];

    window.addEventListener('click', () => {
      this.geometry = new this.possibleGeometry[Math.floor(Math.random() * this.possibleGeometry.length)]()
    })
  }


}