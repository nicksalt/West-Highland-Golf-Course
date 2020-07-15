import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter
}

ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
}

scroll = (event): void => {
  var scrollHeight = event.path[1].scrollY;
  if(scrollHeight >= 450)
    document.querySelector('.navbar').classList.add('fixed-top');
  else if (scrollHeight == 0) 
  document.querySelector('.navbar').classList.remove('fixed-top');

};

}
