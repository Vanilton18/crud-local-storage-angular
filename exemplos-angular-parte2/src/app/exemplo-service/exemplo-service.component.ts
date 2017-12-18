import { Component, OnInit } from '@angular/core';
import { ExemploServiceService } from '../exemplo-service.service';
import { error } from 'util';


@Component({
  selector: 'app-exemplo-service',
  templateUrl: './exemplo-service.component.html',
  styleUrls: ['./exemplo-service.component.scss']
})
export class ExemploServiceComponent implements OnInit {

  constructor(private service: ExemploServiceService) { }

  resposta: any;
  ngOnInit() {
    this.buscarComAsync();
  }

  buscarComCallBack() {
    this.service.getFromApi().then((response) => {
      console.log(response.json());
    }).catch((erro) => {
      console.log(erro);
    });
  }

  async buscarComAsync() {
    try {
      const response = await this.service.getFromApi();
      this.resposta = response.json();
      console.log(this.resposta);
    } catch (error) {
      console.log(error);
    }
  }

}
