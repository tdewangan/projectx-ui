import { FieldBase } from './field-base';

export class TextareaField extends FieldBase<string> {
  override controlType = 'textarea';
}
