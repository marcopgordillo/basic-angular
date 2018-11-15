import { Directive, HostBinding, HostListener, QueryList, ViewChildren } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'
})
export class DropdownDirective {

  @HostBinding('class.show')
  private isOpen = false;

  @ViewChildren('div')
  private viewChildren: QueryList<any>;

  constructor() { }

  @HostListener('click')
  public toggleOpen() {
    this.isOpen = !this.isOpen;
    this.viewChildren.forEach(item => console.log(item));
  }
}
