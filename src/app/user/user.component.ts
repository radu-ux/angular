import { Component } from "@angular/core";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class  UserComponent {
  shouldShowParagraph: boolean = false;
  clickCounter: number = 0;
  counterArray: Array<number> = [this.clickCounter]

  showParagraph() {
    this.shouldShowParagraph = !this.shouldShowParagraph
    this.clickCounter++;
    this.counterArray.push(this.clickCounter)
  }

  getBackgroundColor() {
    return this.clickCounter >= 5 ? 'blue' : null
  }
}
