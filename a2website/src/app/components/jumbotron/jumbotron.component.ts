import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {
  private jbtHeading: string;
  private jbtText: string;
  private jbtBtnText: string;
  private jbtBtnUrl: string;

  constructor() {
    this.jbtHeading = 'Jumbotron';
    this.jbtText = 'This is a sample angular project';
    this.jbtBtnText = 'Click Me';
    this.jbtBtnUrl = 'https://www.google.com';
  }


}
