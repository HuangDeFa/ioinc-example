import {Directive,ElementRef, HostListener, Input  } from "@angular/core";

@Directive(
    {
        selector:'[apphighlight]'
    }
)
export class HighlightDirective{
    @Input("apphighlight") highlightColor:string;
    @Input()defaulColor:string;

    constructor(private el:ElementRef){
     this.highlight(this.highlightColor||this.defaulColor||'red');
    }

    highlight(color:string){
        this.el.nativeElement.style.backgroundColor=color;
    }

    @HostListener('mouseenter') onMouseEnter(){
        this.highlight(this.highlightColor||this.defaulColor||'red');
    }

    @HostListener('mouseleave') onMouseLeave(){
          this.highlight(null)
    }
}