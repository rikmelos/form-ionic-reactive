import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  readonly imagePath = '../../assets/image/woman-turn.svg';
  readonly image2Path = '../../assets/image/header-logo.svg';
  readonly iconPath = '../../assets/image/icon-turn.svg';
  constructor() { }

  ngOnInit() {
  }

  goToMap() {
    console.log('yendo al mapa');
  }

}
