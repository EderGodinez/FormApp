import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of, subscribeOn } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator{
  validate(control: AbstractControl):Observable<ValidationErrors | null> {
    const email=control.value;
     const httpCallObservable=new Observable<ValidationErrors|null>((subscribe)=>{
        if (email==='eder.godinez26@gmail.com') {
            subscribe.next({emailTaken:true});
            subscribe.complete();
            //return
        }
        subscribe.next(null);
        subscribe.complete();
     })
     .pipe(
      delay(3000)
     );
     return httpCallObservable;
  }
}
