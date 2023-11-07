import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor:string='yellow';
  @Input() highLightColour:string='blue';

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
   // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','yellow');
   this.backgroundColor=this.defaultColor;
  }
  @HostBinding('style.backgroundColor') backgroundColor:string='transparent';
  @HostListener('mouseenter') mouseOver(e:Event){
   // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','yellow');
   this.backgroundColor=this.defaultColor
  }

  @HostListener('mouseleave') mouseLeave(e:Event){
   // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','transparent');
   this.backgroundColor=this.highLightColour;
  }

}
