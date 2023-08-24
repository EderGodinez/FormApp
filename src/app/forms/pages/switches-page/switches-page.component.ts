import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit {
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.myForm.reset(this.person)
  }
 public myForm:FormGroup=this.fb.group({
  gender:['M',[Validators.required]],
  WantNotifications:[true,Validators.required],
  termsAndConditions:[false,Validators.requiredTrue]
 });
 public person={
  gender:'F',
  WantNotifications:false
 }
 //ngSubmit
 onSave():void{
  if (this.myForm.invalid) {
   this.myForm.markAllAsTouched();
    return;
  }


  //manera de pasar solo informacion hacia otro objeto
  //se desestructura los que no queremos pasar y creamos uno nuevo el
  //cual considerara todos excepto por los elementos desestructurados
  const {termsAndConditions,...newPerson}=this.myForm.value;
  this.person=newPerson;


this.myForm.reset()
 }
 isValidField( field: string ): boolean | null {
  return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;

  }
}

