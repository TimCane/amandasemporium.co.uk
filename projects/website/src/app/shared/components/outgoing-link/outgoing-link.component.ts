import { Component, Input } from '@angular/core';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'a-outgoing',
  templateUrl: './outgoing-link.component.html',
  styleUrls: ['./outgoing-link.component.scss'],
})
export class OutgoingLinkComponent {
  faUpRightFromSquare = faUpRightFromSquare;
  @Input() href: string = '';
  @Input() textColor: string = 'text-primary';
}
