import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MultilineStringToHtmlPipe } from './multiline-string-to-html.pipe';

@NgModule({
  declarations: [MultilineStringToHtmlPipe],
  imports: [CommonModule],
  exports: [MultilineStringToHtmlPipe],
})
export class MultilineStringToHtmlModule {}
