import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { MAPS_API_KEY } from "../../private/variables";
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faFacebook = faFacebook
  mapsSource: SafeResourceUrl
  constructor(private sanitizer: DomSanitizer) {
    this.mapsSource = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?key=" 
    + MAPS_API_KEY + "&q=West+Highland+Golf+Course+Madoc+Ontario");
    console.log(MAPS_API_KEY);
   }

  ngOnInit(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
