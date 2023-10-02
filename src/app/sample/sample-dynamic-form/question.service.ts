import { Injectable } from '@angular/core';
import { CheckboxField } from '@shared/components/dynamic/core/field-checkbox';
import { DropdownField } from '@shared/components/dynamic/core/field-dropdown';
import { RadioGroupField } from '@shared/components/dynamic/core/field-radiogroup';
import { TextareaField } from '@shared/components/dynamic/core/field-textarea';
import { TextboxField } from '@shared/components/dynamic/core/field-textbox';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  getQuestions() {
    const questions = [
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
        order: 4,
      }),

      new TextboxField({
        key: 'postalCode',
        label: 'Postal Code',
        type: 'number',
        order: 5,
      }),

      new RadioGroupField({
        key: 'shipping',
        type: 'radiogroup',
        value: 'free',
        options: [
          { key: 'free', value: 'Free Shipping' },
          { key: 'priority', value: 'Priority Shipping' },
          { key: 'nextday', value: 'Next Day Shipping' },
        ],
        order: 6,
      }),

      new CheckboxField({
        key: 'privilege',
        type: 'checkbox',
        label: 'Privilege',
        order: 7,
        value: false,
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
