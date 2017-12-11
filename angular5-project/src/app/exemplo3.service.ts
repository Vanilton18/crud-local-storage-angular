import { Injectable } from '@angular/core';

@Injectable()
export class Exemplo3Service {


  animes = ['Dragon Ball', 'Naruto', 'Full Metal', 'Death Note', 'JoJo'];
  constructor() { }

  getLisAnimes(): string[] {
    return this.animes;
  }

}
