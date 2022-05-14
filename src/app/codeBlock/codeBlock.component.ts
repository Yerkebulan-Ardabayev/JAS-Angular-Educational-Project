import { Component, OnInit } from '@angular/core';

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
  name = 'Yerkebulan Ardabayev';
  names: string[] = ['Ula', 'Rakha'];

  characters: Character[] = [];

  ngOnInit(): void {
    fetch(`https://breakingbadapi.com/api/characters/`)
      .then((res) => res.json())
      .then((data) => this.characters.push(...data));
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
    if (character.status === 'Deceased') return 'brown';
    if (character.status === 'Presumed dead') return 'blue';
    return 'black';
  }
}
