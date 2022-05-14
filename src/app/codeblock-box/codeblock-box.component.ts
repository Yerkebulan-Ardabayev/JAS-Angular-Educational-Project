import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../codeBlock/codeBlock.component';

@Component({
  selector: 'app-codeblock-box',
  templateUrl: './codeblock-box.component.html',
  styleUrls: ['./codeblock-box.component.scss']
})
export class CodeblockBoxComponent implements OnInit {
  @Input() character: Character | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
