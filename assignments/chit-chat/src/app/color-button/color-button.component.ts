import { style } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-button',
  template: `
  <div
    class="color-icon"
    [style.backgroundColor]="color"
    (click)="emitBackgroundColor()"
  ></div>
`,
styles: [
  `
    .color-icon {
      width: 25px;
      height: 25px;
      border-radius:50%;
      margin: 2px;
      cursor: pointer;
     
    }
  `,
],
})
export class ColorButtonComponent {

  @Input() color:string='';
  @Output() colorClicked=new EventEmitter<string>;

  emitBackgroundColor(){
    this.colorClicked.emit(this.color);
    console.log(this.color)
  }

}
