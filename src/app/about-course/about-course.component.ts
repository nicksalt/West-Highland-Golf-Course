import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-course',
  templateUrl: './about-course.component.html',
  styleUrls: ['./about-course.component.scss']
})
export class AboutCourseComponent implements OnInit {

  holes: Object;
  constructor() { }

  ngOnInit() {
    this.populateHoles();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  populateHoles(){

    this.holes = {'1' : new Hole(1, 322, 309, "From the blue tees this is a 425 yard Par 5. Place your first shot and then hit across the creek to an elevated green.. From The white tees it is possible to get it over Eels creek with one good shot.", "", 4),
     '2' : new Hole(2, 270, 270, "From the blue tees this is a 425 yard Par 5. Place your first shot and then hit across the creek to an elevated green.. From The white tees it is possible to get it over Eels creek with one good shot.", "", 4),
    '3' : new Hole(3, 249, 218, "From the blue tees this is a 425 yard Par 5. Place your first shot and then hit across the creek to an elevated green.. From The white tees it is possible to get it over Eels creek with one good shot.", "",4), 
    '4' : new Hole(4, 267, 258, "From the blue tees this is a 425 yard Par 5. Place your first shot and then hit across the creek to an elevated green.. From The white tees it is possible to get it over Eels creek with one good shot.", "",4), 
    '5' : new Hole(5, 124, 124, "From the blue tees this is a 425 yard Par 5. Place your first shot and then hit across the creek to an elevated green.. From The white tees it is possible to get it over Eels creek with one good shot.", "",3),
     '6' : new Hole(6, 278, 268, "From the blue tees this is a 425 yard Par 5. Place your first shot and then hit across the creek to an elevated green.. From The white tees it is possible to get it over Eels creek with one good shot.", "",4),
    '7' : new Hole(7, 318, 250, "From the blue tees this is a 425 yard Par 5. Place your first shot and then hit across the creek to an elevated green.. From The white tees it is possible to get it over Eels creek with one good shot.", "",4),
     '8' : new Hole(8, 200, 150, "From the blue tees this is a 425 yard Par 5. Place your first shot and then hit across the creek to an elevated green.. From The white tees it is possible to get it over Eels creek with one good shot.", "",3),
    '9' : new Hole(9, 284, 256, "From the blue tees this is a 425 yard Par 5. Place your first shot and then hit across the creek to an elevated green.. From The white tees it is possible to get it over Eels creek with one good shot.", "",4), 
    '10' : new Hole(10, 220, 220, "From the blue tees this is a 425 yard Par 5. Place your first shot and then hit across the creek to an elevated green.. From The white tees it is possible to get it over Eels creek with one good shot.", "",4),
    '11' : new Hole(11, 256, 250, "From the blue tees this is a 425 yard Par 5. Place your first shot and then hit across the creek to an elevated green.. From The white tees it is possible to get it over Eels creek with one good shot.", "",4),
     '12' : new Hole(12, 462, 457, "From the blue tees this is a 425 yard Par 5. Place your first shot and then hit across the creek to an elevated green.. From The white tees it is possible to get it over Eels creek with one good shot.", "",5)};

    console.log(this.holes);
  
  }
}

export class Hole {
  public number : number;
  public mensYardage : number;
  public womensYardage: number;
  public description: string;
  public photoPath: string;
  public par: number;
  
  constructor(number: number, mens: number, womens: number, description:string, path:string, par:number){
    this.number = number;
    this.mensYardage = mens;
    this.womensYardage = womens;
    this.description = description;
    this.photoPath = path;
    this.par = par;
  }
}