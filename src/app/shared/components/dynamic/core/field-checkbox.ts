import { FieldBase } from './field-base';

export class CheckboxField extends FieldBase<boolean> {
  override controlType = 'checkbox';
}
