import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string ='recipebook'
  loadedFeature: string = 'recipe';

  /**
   * Sets the loadedFeature property from the event string input.
   *
   * @remarks
   * As an alternative, you could just set loadedFeature in the html.
   *
   * @param feature - The string 'recipe' or 'shopping-list'
   *
   * @returns None
   */
  OnNavigate(feature: string): void {
    console.log("AppComponent::OnNavigate() --> " + feature);
    this.loadedFeature = feature;
  }
}
