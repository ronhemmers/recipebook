import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // Attach/detach a css class to the Manage Recipe button
  @HostBinding('class.open') isOpen: boolean = false;

  constructor() { }

  /**
   * Toggle the isOpen property when the event 'click' is detected
   * on the element it's attached to, which in this case is
   * 1. recipe-detail.component.html
   * 2. header.component.html
   */
  @HostListener('click') toggleOpen() {
    console.log('DropdownDirective::toggleOpen()');
    this.isOpen = !this.isOpen;
  }

}
