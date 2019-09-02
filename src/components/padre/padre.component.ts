import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss'],
})
export class PadreComponent implements OnInit {

  mijo: any = '';
  nombres = ['carlitos', 'andresito', 'miguelito'];

  constructor() { }

  ngOnInit() {}

  enviarNombre(nombre) {
    this.mijo = nombre;
  }

}
