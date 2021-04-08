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
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }


ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
}
  scroll = (): void => {
    //check width
    if(Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    ) > 975) {
      var elements = document.getElementsByClassName("sponsor")
      var bottomOfLastSponsor = elements[elements.length-1].getBoundingClientRect().bottom - 130;
      if (bottomOfLastSponsor <= 0 )
        document.querySelector('.weather-for-course').classList.add('fixed');
      if (bottomOfLastSponsor > 0)
      document.querySelector('.weather-for-course').classList.remove('fixed');
      }
      else
        document.querySelector('.weather-for-course').classList.remove('fixed');

  };
  ngAfterViewChecked(): void {
    if (this.firstLoad){
      document.querySelectorAll('.referral').forEach((a) => {
        a.remove();
        })
      document.querySelectorAll('.j-poster').forEach((a) => {
        a.remove();
      })
      document.querySelectorAll('.juicer-about').forEach((a) => {
        a.remove();
      })
      document.querySelectorAll('.juicer-ad').forEach((a) => {
        a.remove();
        this.firstLoad = false;
      })
    } else
    this.firstLoad = true;
    
  }
}


