import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { EnvironmentService } from '../services/environment.service';

function clarityScript(projectId: string): string {
  return `(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "${projectId}");`;
}

@NgModule({})
export class ClarityModule {
  constructor(
    @Inject(PLATFORM_ID)
    platformId: Object,
    @Inject(DOCUMENT)
    d: Document,
    private environmentService: EnvironmentService
  ) {
    let clarityProjectId = this.environmentService.clarityProjectId;
    if (isPlatformBrowser(platformId) && clarityProjectId) {
      const s = d.createElement('script');
      s.type = 'text/javascript';
      s.innerHTML = clarityScript(clarityProjectId);
      d.head.appendChild(s);
    }
  }
}
