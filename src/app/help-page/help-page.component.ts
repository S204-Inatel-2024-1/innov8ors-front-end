import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.css'
})
export class HelpPageComponent {
  constructor(private location: Location) { }
  goBack(){
    this.location.back();
  }
}
