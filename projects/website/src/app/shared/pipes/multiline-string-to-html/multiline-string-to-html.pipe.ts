import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'multilineStringToHtml',
})
export class MultilineStringToHtmlPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  transform(str: string): SafeHtml {
    const paragraphs = str.split('\n');
    let output = paragraphs
      .map((p) => p.trim())
      .filter((p) => p != '')
      .map((p) => '<p>' + p + '</p>')
      .join('');

    return this.sanitizer.bypassSecurityTrustHtml(output);
  }
}
