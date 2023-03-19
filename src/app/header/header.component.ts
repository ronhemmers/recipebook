import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // An emitter object to emit an event when either Recipes or Shopping List is selected in the header.
  // Need @Output() so that the it can be listened to it from the parent component.
  @Output() featureSelected: EventEmitter<string> = new EventEmitter<string>();

  onSelect(feature: string) {
    console.log('HeaderComponent::OnSelect() --> ' + feature);
    this.featureSelected.emit(feature);
  }
}
