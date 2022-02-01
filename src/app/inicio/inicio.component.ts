import { Tema} from './../model/Tema';
import { environment } from './../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  nomeTema: string

  key = 'data'
  reverse = true

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }


  
 
  }

}
