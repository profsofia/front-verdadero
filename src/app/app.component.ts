import { Component } from '@angular/core';
import { HolaService } from './services/hola.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HolaService]
})
export class AppComponent {
  title = 'sofia-schenone';
  constructor(private holaService: HolaService){}
  ngOnInit(){
    this.holaService.getData().subscribe(
      data=>{
        console.log('Res', data);
      },
      err=>{
        console.warn(err);
      }
    )
  }

}
