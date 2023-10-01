import { Injectable } from '@angular/core';
import { FieldBase } from '@shared/components/dynamic/core/field-base';
import { DropdownField } from '@shared/components/dynamic/core/field-dropdown';
import { TextareaField } from '@shared/components/dynamic/core/field-textarea';
import { TextboxField } from '@shared/components/dynamic/core/field-textbox';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  // TODO: get from a remote source of question metadata
  getQuestions() {
    const questions: FieldBase<string>[] = [
      new DropdownField({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 3,
      }),

      new TextboxField({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
      }),

      new TextboxField({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),

      new TextareaField({
        key: 'addressLine1',
        label: 'Address',
        type: 'textarea',
        order: 2,
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
