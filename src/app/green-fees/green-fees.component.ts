import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-green-fees',
  templateUrl: './green-fees.component.html',
  styleUrls: ['./green-fees.component.scss']
})
export class GreenFeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
