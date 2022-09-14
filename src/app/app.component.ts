import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { PatientsService } from './services/patients.service';
import { map, switchMap, shareReplay, startWith, debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  patients$ = this.patientsService.fuse$.pipe(
    switchMap((fuse) => {
      return this.searchCriteriaForm.valueChanges.pipe(
        debounceTime(500),
        startWith({ criteria: 'a' }),
        map(({ criteria }) => fuse.search(criteria))
      );
    }),
    shareReplay()
  );

  selectedItems: any[] = [];

  readonly searchCriteriaForm: FormGroup = this.fb.group({
    criteria: '',
  });

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private patientsService: PatientsService,
    private fb: FormBuilder
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  select(patient): void {
    this.selectedItems = [patient];
  }
}
