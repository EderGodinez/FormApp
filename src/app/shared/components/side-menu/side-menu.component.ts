import { Component } from '@angular/core';
interface MenuItem{
  title:string;
  route:string;
}
@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})

export class SideMenuComponent {
public formMenu:MenuItem[]=[
{title:'Basicos',route:'./reactive/basic'},
{title:'Dinamicos',route:'./reactive/dynamic'},
{title:'Switches',route:'./reactive/switches'}

]
public AuthMenu:MenuItem[]=[
  {title:'Registro',route:'./auth'}
]
}
