import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  consulta: any;
  constructor(private heroService : HeroService, private nav: NavController) {}
  ngOnInit(){


  }
salvaHeroi(){
  this.nav.navigateForward('formulario');

} 
listarHero(){
  this.heroService.obterListaHerois().then((json)=> { this.consulta =json}).catch((erro)=>{
console.log(erro);
  });
}
}

