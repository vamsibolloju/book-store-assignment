import {Directive, HostBinding, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[customDropdown]'
})
export class CustomDropdownDirective {
    
    constructor(private el: ElementRef){
    }
  
  ngAfterViewInit(){
    const elems = this.el.nativeElement.childNodes
    const title = elems[0];
    const list = elems[1];

    title.addEventListener('click', () => {
        list.style.display = list.style.display === 'block' ? 'none' : 'block';
    });  
  }

  @HostListener('click', [ '$event' ]) toggleopen($event) {
    if($event.srcElement.id === 'title'){

    }
  }
}