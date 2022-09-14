import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import Fuse from 'fuse.js';

import { patients } from './patients.data';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  private readonly patients$ = of(patients);

  readonly fuse$ = this.patients$.pipe(
    map((patients) => {
      return new Fuse(patients, {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: ['name', 'fullName', 'patientName', 'parentName', 'note'],
      });
    })
  );

  constructor() {}

  getPatients(): Observable<any> {
    return this.patients$;
  }
}
