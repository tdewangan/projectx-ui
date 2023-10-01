import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlService } from './form-control.service';
import { FieldBase } from '../core/field-base';

@Component({
  selector: 'zul-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  @Input() fields: FieldBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private fcs: FormControlService) {}

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.fields as FieldBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
