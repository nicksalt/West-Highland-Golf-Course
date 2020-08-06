import { Component, OnInit, Input } from '@angular/core';
import { Hole } from '../about-course.component';

@Component({
  selector: 'app-hole',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.scss']
})
export class HoleComponent implements OnInit {

  @Input() public hole: Hole;

  isOdd : boolean;

  constructor() { }

  ngOnInit() {
    this.isOdd = this.hole.number % 2 == 0;
  }
  
  ngAfterViewInit(): void {
    console.log(this.hole);
    
  }

  

}


