import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'multilineStringToHtml',
})
export class MultilineStringToHtmlPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  transform(str: string, moreInfo: boolean): SafeHtml {
    const paragraphs = str
      .split('\n')
      .map((p) => p.trim())
      .filter((p) => p != '');

    let start = moreInfo ? 2 : 0;
    let end = moreInfo ? paragraphs.length : 2;

    let output = paragraphs
      .map((p) => '<p>' + p + '</p>')
      .splice(start, end)
      .join('');

    return this.sanitizer.bypassSecurityTrustHtml(output);
  }
}
