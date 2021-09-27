import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Categoria } from 'src/app/home/model/Categoria';
import { Heroi } from 'src/app/home/model/heroi';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
 
  userForm: FormGroup;
  heroi : Heroi;

  constructor(private heroService : HeroService, public formBuilder: FormBuilder, private zone: NgZone ) {
    
    this.userForm = this.formBuilder.group({
      id: [''],
      nome: [''],
      categoriasId:[''],
      categoriasNome: ['']

    })
   }

  ngOnInit() {}
  onSubmit(){
if(!this.userForm.valid){
   return false;

  } else {
  this.heroService.salvaFormularioHeroi(this.userForm.value).subscribe((response)=>{
    this.zone.run(() => {
      this.userForm.reset();
    })
  })
}
  }
}
