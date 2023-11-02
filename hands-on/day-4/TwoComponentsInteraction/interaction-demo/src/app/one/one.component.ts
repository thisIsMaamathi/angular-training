import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  name: string = '';

  @Output()
  sendName = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.sendName.emit(this.name);
  }
}