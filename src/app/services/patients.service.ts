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
      const options = {
        // isCaseSensitive: false,
        includeScore: true,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        ignoreLocation: true,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: [
          {
            name: 'search.patientFirstName',
            weight: 5,
          },
          {
            name: 'search.patientLastName',
            weight: 3.5,
          },
          {
            name: 'search.patientName',
            weight: 2,
          },
          {
            name: 'search.fullName',
            weight: 1,
          },
        ],
      };
      return new Fuse(
        patients,
        options,
        Fuse.createIndex(options.keys, patients)
      );
    })
  );

  constructor() {}

  getPatients(): Observable<any> {
    return this.patients$;
  }
}
