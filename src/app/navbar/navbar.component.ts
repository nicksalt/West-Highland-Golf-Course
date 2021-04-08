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

scroll = (): void => {
  var scrollHeight = window.pageYOffset;
  if(scrollHeight >= document.documentElement.clientHeight * .2)
    document.querySelector('.navbar').classList.add('fixed-top');
  else if (scrollHeight == 0) 
  document.querySelector('.navbar').classList.remove('fixed-top');

};

ToggleNavBar () {
  let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
  if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
      element.click();
  }
}

}
