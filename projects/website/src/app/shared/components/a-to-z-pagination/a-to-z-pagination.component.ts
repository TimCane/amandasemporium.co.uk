import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-a-to-z-pagination',
  templateUrl: './a-to-z-pagination.component.html',
  styleUrls: ['./a-to-z-pagination.component.scss'],
})
export class AToZPaginationComponent {
  alphabet: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  selectedLetter: string | null = null;

  @Input() availableLetters: string[] | null = null;

  @Output() letterClicked: EventEmitter<string | null> = new EventEmitter<
    string | null
  >();

  isAvailable(letter: string) {
    return (
      letter == 'all' ||
      (this.availableLetters != null &&
        this.availableLetters.indexOf(letter) > -1)
    );
  }

  onClick(letter: string) {
    if (letter == this.selectedLetter) {
      return;
    }

    if (!this.isAvailable(letter)) {
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
