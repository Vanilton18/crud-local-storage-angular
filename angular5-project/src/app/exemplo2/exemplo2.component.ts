import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo2',
  templateUrl: './exemplo2.component.html',
  styleUrls: ['./exemplo2.component.css']
})
export class Exemplo2Component implements OnInit {

  constructor() { }

  urlImage = 'https://vandalsbucket.s3.amazonaws.com/spree/products/82509/original/Bacontente.jpg';
  texto = 'Meu texto aqui';
  ativo = true;
  key = '';

  varificarTexto($event) {
    this.keyPress($event);
  }

  keyPress(event: KeyboardEvent) {
    if (event.keyCode === 192 || event.keyCode === 231 || event.keyCode === 65) {
      //console.log(event.srcElement);
      //console.log(event.keyCode);
      event.preventDefault();
      alert('Não é permitido digitar essa tecla BB => ' + event.key);
    }
  }

  ngOnInit() {
  }

}
