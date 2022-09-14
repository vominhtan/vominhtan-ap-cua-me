import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
})
export class PatientCardComponent implements OnChanges {
  @Input()
  patient: any;

  patientForm: FormGroup = this.fb.group({
    name: '',
    fullName: '',
    note: '',
    patientName: '',
    parentName: '',
    otherName: '',
  });

  constructor(private readonly fb: FormBuilder) {}

  ngOnChanges(simpleChanges: SimpleChanges): void {
    if (simpleChanges.patient) {
      this.patientForm.patchValue(this.patient);
    }
  }
}
