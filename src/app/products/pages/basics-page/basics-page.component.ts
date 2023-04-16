import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'Christopher';
  public nameUpper: string = 'CHRISTOPHER';
  public fullName: string = 'chrisTopHER';

  public customDate: Date = new Date();

}
