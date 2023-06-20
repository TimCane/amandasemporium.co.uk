import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AToZPaginationComponent } from '../a-to-z-pagination/a-to-z-pagination.component';

@NgModule({
  declarations: [AToZPaginationComponent],
  imports: [CommonModule],
  exports: [AToZPaginationComponent],
})
export class AToZPaginationModule {}
