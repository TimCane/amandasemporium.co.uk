import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() collectionSize = 0;
  @Input() pageSize = 12;
  @Input() currentPage = 1;
  @Input() maxSize = 2;
  @Input() firstLastButtons = true;
  @Input() nextPreviousButtons = true;

  totalPages: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.totalPages = new Array(Math.ceil(this.collectionSize / this.pageSize));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['collectionSize']) {
      this.totalPages = new Array(
        Math.ceil(this.collectionSize / this.pageSize)
      );

      setTimeout(() => {
        this.selectPageNumber(1);
      }, 1);
    }
  }

  selectPageNumber(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  next() {
    const nextPage = this.currentPage + 1;
    nextPage <= this.totalPages.length && this.selectPageNumber(nextPage);
  }

  previous() {
    const previousPage = this.currentPage - 1;
    previousPage >= 1 && this.selectPageNumber(previousPage);
  }
}
