import { Exemplo3Service } from './../exemplo3.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo3',
  templateUrl: './exemplo3.component.html',
  styleUrls: ['./exemplo3.component.css']
})
export class Exemplo3Component implements OnInit {

  nome = '';
  constructor(private service: Exemplo3Service) { }

  ngOnInit() {
    console.log(this.service.getLisAnimes());
  }

  mudarNome () {
    const date = new Date().getTime();
    this.nome = `Robô ${date}`;
  }

}
