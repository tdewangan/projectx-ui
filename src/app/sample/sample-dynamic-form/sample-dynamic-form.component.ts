import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { FieldBase } from '@shared/components/dynamic/core/field-base';
import { QuestionService } from './question.service';

@Component({
  selector: 'zul-sample-dynamic-form',
  templateUrl: './sample-dynamic-form.component.html',
  styleUrls: ['./sample-dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SampleDynamicFormComponent {
  questions$: Observable<FieldBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
