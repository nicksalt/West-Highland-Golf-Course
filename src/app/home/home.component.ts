import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   TIMEOUT: number = null;
   firstLoad: boolean = false;
   facebookIcon = faFacebook;
  
  constructor() { } 

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  ngAfterViewChecked(): void {
    if (this.firstLoad){
      document.querySelectorAll('.referral').forEach(function(a){
        a.remove();
        this.firstLoad = false;
        })
    } else
    this.firstLoad = true;
    
  }
}


