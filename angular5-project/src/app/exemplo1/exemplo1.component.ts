import { Component} from '@angular/core';

@Component({
  selector: 'app-exemplo1',
  templateUrl: './exemplo1.component.html',
  //template: '<h1>Olá eu sou, {{pessoa.name}} uma template</h1>',
  styleUrls: ['./exemplo1.component.css']
})
export class Exemplo1Component {

  pessoa = {
    name: 'Vanilton Pinheiro',
    email: 'vanilton18@gmail.com'
  };

  dizerOi () {
    alert('oioi');
  }
  // tslint:disable-next-line:member-ordering
  frutas = ['Abacate', 'Maracula', 'Mamao'];
  // tslint:disable-next-line:member-ordering
  numbers: Array<number> = new Array<number>();

  listaNumeros = () => {
    for (let i = 0; i < 25; i++) {
      this.numbers[i] = Math.floor(Math.random() * 50);
    }
    console.log(this.numbers);
    console.log(this.numbers.sort());
    return this.numbers.sort();
  }
}
