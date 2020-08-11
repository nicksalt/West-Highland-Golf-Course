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

    this.holes = {'1' : new Hole(1, 322, 309, "", "../../../assets/course-pictures/hole1.jpg", 4, "bottom center"), //done
     '2' : new Hole(2, 270, 270, "", "../../../assets/course-pictures/course2.jpg", 4, "center center"), //done
    '3' : new Hole(3, 249, 218, "", "../../../assets/course-pictures/course1.jpg",4, "center center"), //done
    '4' : new Hole(4, 267, 258, "", "../../../assets/course-pictures/hole4-1.jpg",4, "center center"), //done
    '5' : new Hole(5, 124, 124, "", "../../../assets/course-pictures/hole5.jpg",3, "center center"),//done
     '6' : new Hole(6, 278, 268, "", "../../../assets/course-pictures/hole6.jpg", 4, "center center"), //done
    '7' : new Hole(7, 318, 250, "", "../../../assets/course-pictures/course4.jpg", 4, "bottom center"),//done
     '8' : new Hole(8, 200, 150, "", "../../../assets/course-pictures/hole4.jpg",3, "bottom center"),//done
    '9' : new Hole(9, 284, 256, "", "../../../assets/course-pictures/course1.jpg",4, "bottom center"), 
    '10' : new Hole(10, 220, 220, "", "../../../assets/course-pictures/hole10.jpg",4, "center center"),
    '11' : new Hole(11, 256, 250, "", "../../../assets/course-pictures/hole11.jpg",4, "center center"),
     '12' : new Hole(12, 462, 457, "", "../../../assets/course-pictures/hole12.jpg",5, "center center")};

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
  public position: string;
  
  constructor(number: number, mens: number, womens: number, description:string, path:string, par:number , position:string){
    this.number = number;
    this.mensYardage = mens;
    this.womensYardage = womens;
    this.description = description;
    this.photoPath = path;
    this.par = par;
    this.position = position;
  }
}