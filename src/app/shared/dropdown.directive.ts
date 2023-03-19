import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  /**
   * Attach/detach the CSS 'open' class to the buttons we want to work with:
   * 1. Manage Recipe button (recipe-detail component)
   * 2. Manage button (header component)
   */
  @HostBinding('class.open') isOpen: boolean = false;

  /**
   * Toggle the isOpen property when the event 'click' is detected
   * on the element it's attached to, which in this case is
   * 1. recipe-detail.component.html
   * 2. header.component.html
   */
  // @HostListener('click') toggleOpen() {
  //   console.log('DropdownDirective::toggleOpen()');
  //   this.isOpen = !this.isOpen;
  // }
  /**
   * Place the listener on the document instead of the dropdown.
   * Now we can close the dropdown by clicking anywhere.
   */
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    console.log('DropdownDirective::toggleOpen()');
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elementRef: ElementRef) {}

}
