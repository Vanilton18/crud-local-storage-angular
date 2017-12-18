import {AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exemplo5-manipulation-dom',
  templateUrl: './exemplo5-manipulation-dom.component.html',
  styleUrls: ['./exemplo5-manipulation-dom.component.scss']
})
export class Exemplo5ManipulationDomComponent implements OnInit, AfterViewInit {

  @ViewChild('titulo1') titulo1;

  constructor() { }

  ngOnInit() {
    console.log('passei aqui');
  }

  ngAfterViewInit() {

    console.log(this.titulo1.nativeElement.style.color = 'red');
    console.log('passei aqui depois');
  }

}
