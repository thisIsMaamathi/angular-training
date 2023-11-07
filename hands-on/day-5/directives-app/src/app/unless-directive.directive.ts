import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnlessDirective]'
})
export class UnlessDirectiveDirective {
constructor(private templateRef:TemplateRef<any>,private vcRef:ViewContainerRef){}
  
@Input() set appUnless(condition:boolean){
  if(!condition){
    this.vcRef.createEmbeddedView(this.templateRef);
  }
  else{
    this.vcRef.clear;
  }
}
  
}
