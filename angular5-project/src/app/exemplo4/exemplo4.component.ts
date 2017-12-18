import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo4',
  templateUrl: './exemplo4.component.html',
  styleUrls: ['./exemplo4.component.css']
})
export class Exemplo4Component implements OnInit {

  boxColor = 'white';
  constructor() { }

  ngOnInit() {
    console.log(this.boxColor);
  }

  mudarCor(cor: string) {
    this.boxColor = cor;
  }


}
