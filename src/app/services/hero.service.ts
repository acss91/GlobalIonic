import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Heroi } from '../home/model/heroi';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
   url = "https://heroes.globalthings.net/api/Heroes";
  constructor( private http:HttpClient) { }
  salvaFormularioHeroi(heroi: Heroi): Observable<any>{
    
    return this.http.post(this.url, JSON.stringify(heroi));

  }      
  obterListaHerois(){
    
return this.http.get(this.url).toPromise();
  }
}
