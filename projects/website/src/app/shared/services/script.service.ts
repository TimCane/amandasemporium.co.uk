import { Injectable } from '@angular/core';
import { Observable, zip } from 'rxjs';
import { EnvironmentService } from './environment.service';

interface Script {
  Src: string;
  Loaded: boolean;
}

interface ScriptEvent {
  Name: string;
  Loaded: boolean;
  Status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ScriptService {
  private scripts: { [name: string]: Script } = {};

  constructor(private environment: EnvironmentService) {
    this.scripts = {
      googleMaps: {
        Src: `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsKey}`,
        Loaded: false,
      },
    };
  }

  Load(...scripts: string[]) {
    const promises: Observable<ScriptEvent>[] = [];
    scripts.forEach((script) => promises.push(this.LoadScript(script)));
    return zip(promises);
  }

  LoadScript(name: string): Observable<ScriptEvent> {
    return new Observable<ScriptEvent>((subsciber) => {
      if (this.scripts[name].Loaded) {
        subsciber.next({ Name: name, Loaded: true, Status: 'Already Loaded' });
      } else {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].Src;

        script.onload = () => {
          this.scripts[name].Loaded = true;
          subsciber.next({ Name: name, Loaded: true, Status: 'Loaded' });
        };

        script.onerror = (error: any) =>
          subsciber.next({ Name: name, Loaded: false, Status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }
}
