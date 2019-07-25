import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})

export class FormularioPage implements OnInit {

  myText: string = '';
  updateInfoForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.updateInfoForm = this.fb.group({
      personalInfo: [{value: '', disabled: false}, [Validators.required]]
    });
  }

}
