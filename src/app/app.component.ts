import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UF1ExHectorVinas';
  constructor(private http: HttpClient) {

     this.http.post('http://localhost:3020/llegirImatgesVinasHidalgo',{}).subscribe(response =>{
       }, error =>{
         console.log('Error: ', error);
     });
     /*
     this.http.put('http://localhost:3020/copiaFitxerVinasHidalgo',{}).subscribe(response =>{
     }, error =>{
       console.log('Error: ', error);
     });

     this.http.get('http://localhost:3020/mostraNomsVinasHidalgo',{}).subscribe(response =>{
     }, error =>{
       console.log('Error: ', error);
     });
     */
  }
}

