import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

export type Character = {
  name: String;
  status: 'Alive' | 'Deceased' | 'Presumed dead';
  img: String;
};
@Component({
  selector: 'app-codeblock',
  templateUrl: './codeBlock.component.html',
})
export class CodeblockComponent implements OnInit {
  name = 'Yerkebulan';
  names: string[] = ['Ula', 'Rakhimbek'];
  totalLength: number = 0;
  page: number = 1;

  
  characters: Character[] = [];

  ngOnInit(): void {
    fetch(`https://www.breakingbadapi.com/api/characters/`)
      .then((res) => res.json())
      .then((data) => {
        this.characters = [...data.slice(0, 20)];
        this.totalLength = data.length;
      });
  }

  onInputChange(event: any) {
    this.name = event.target.value;
    console.log(event.target.value);
  }

  onButtonClick() {
    this.names.push(this.name);
    console.log(this.characters);
    this.name = '';
  }

  getCharColor(character: Character) {
    if (character.status === 'Alive') return 'green';
    if (character.status === 'Deceased') return 'red';
    if (character.status === 'Presumed dead') return 'yellow';
    return 'black';
  }

  fetchCharacters(page = 1) {
    fetch(
      `https://www.breakingbadapi.com/api/characters/?limit=20&offset=${
        (page - 1) * 20
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        this.characters = [...data];
      });
  }

  setPage(event: PageEvent): void {
    if (event.previousPageIndex! > event.pageIndex) {
      this.page = event.pageIndex + 1;
    } else {
      this.page++;
    }

    console.log(this.page, 'current');
    console.log(event);
    console.log(event.previousPageIndex!, 'previous');

    this.fetchCharacters(this.page);
  }
}
