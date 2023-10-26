import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'Cesar';
  public nameUpper: string = 'Cesar';
  public fullName: string = 'cEsAr ViLcA';


  public customDate:Date = new Date();

}
