import { Component, OnInit, Input, forwardRef} from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup, ControlValueAccessor, Validators, NG_VALUE_ACCESSOR} from '@angular/forms';
import { City, cities } from './uciCityDataSet';
import { ModelPerson } from './model';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonalComponent),
      multi: true
    }
  ]
})
export class PersonalComponent implements ControlValueAccessor, OnInit {
  @Input()
  texto: string;
  @Input('value')
  val: string;
  
  
  personalInfo: FormGroup;

  cityList: City[] = cities;
  personalModel: ModelPerson;









  //value: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personalInfo = this.fb.group({
      uciCity: ['', Validators.required],
     });

     this.personalInfo.get('uciCity').valueChanges.subscribe(
      changes => {
        console.log('City has changed:', changes);
        this.texto = changes;
      }

    );
  }

  private propagateChange = (_: any) => {};

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
}

registerOnTouched(fn: any): void {}

registerOnValidatorChange(fn: () => void): void {}

setDisabledState(isDisabled: boolean): void {}

writeValue(value: ModelPerson) {
  this.personalModel = value;
  //this.texto = value.ucieCity;
  console.log("****************>>>> "+this.personalModel);
  }

}
