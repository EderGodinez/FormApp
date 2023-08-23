import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {
  constructor(private fb:FormBuilder){}
 public myForm:FormGroup=this.fb.group({
  name:['',[Validators.required,Validators.minLength(5)]],
  favoriteGames:this.fb.array([
    ['Mario Bros',Validators.required],
    ['Devil May Cry 5',Validators.required]
  ])
 })
 public newFavorite:FormControl=new FormControl('',[Validators.required])
 onSubmit():void{
      if (this.myForm.invalid) {
          this.myForm.markAllAsTouched()
          return
      }
      this.myForm.reset();
        (this.myForm.controls['favoriteGames'] as FormArray)=this.fb.array([])
 }
  get favoriteGames(){
    return this.myForm.get('favoriteGames') as FormArray
  }

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  getFieldError( field: string ): string | null {

    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors) ) {
      switch( key ) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${ errors['minlength'].requiredLength } caracters.`;
      }
    }

    return null;
  }
isvalidFieldInArray(formArray:FormArray,index:number){
  return formArray.controls[index].errors &&
    formArray.controls[index].touched;
}
OnDeleteFavorite(index:number):void{
  this.favoriteGames.removeAt(index);
}
onAddToFavorites():void{
    if (this.newFavorite.invalid) return;
    const newGame=this.newFavorite.value;
    this.favoriteGames
    .push(this.fb.control(newGame,Validators.required));
    this.newFavorite.reset();
}

}
