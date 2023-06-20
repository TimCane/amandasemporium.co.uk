import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-a-to-z-pagination',
  templateUrl: './a-to-z-pagination.component.html',
  styleUrls: ['./a-to-z-pagination.component.scss'],
})
export class AToZPaginationComponent {
  selectedLetter: string | null = null;

  @Output() letterClicked: EventEmitter<string | null> = new EventEmitter<
    string | null
  >();

  onClick(letter: string) {
    if (letter == this.selectedLetter) {
      return;
    }

    this.selectedLetter = letter;
    this.letterClicked.emit(letter);
  }

  onClear() {
    if (this.selectedLetter == null) {
      return;
    }

    this.selectedLetter = null;
    this.letterClicked.emit(null);
  }
}
