import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customValidator from 'src/app/shared/validators/validators';
import { ValidatorService } from '../../../shared/services/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {
  constructor(private fb:FormBuilder,
    private ValidatorService:ValidatorService){}
  public myForm:FormGroup=this.fb.group({
    name:['',[Validators.required,Validators.pattern(this.ValidatorService.firstNameAndLastnamePattern)]],
    email:['',[Validators.required,Validators.pattern(this.ValidatorService.emailPattern)],[new EmailValidator()]],
    UserName:['',[Validators.required,customValidator.cantBeStrider]],
    Password:['',[Validators.required,Validators.minLength(5)]],
    ConfirmPass:['',[Validators.required]]
  },{
    validators:[
      this.ValidatorService.AreFieldEquals('Password','ConfirmPass')
    ]
  })
isValidField(field:string){
  //TODO: Obtener validacion desde un servicio.
  return this.ValidatorService.isValidField(this.myForm,field)
}
onSubmit():void{
  this.myForm.markAllAsTouched();
}
}
