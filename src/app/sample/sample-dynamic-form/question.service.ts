import { Injectable } from '@angular/core';
import { BaseControl } from '@shared/components/dynamic/core/field-base';

import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  getQuestions(): Observable<any[]> {
    const questions = [
      {
        controlType: 'dropdown',
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 3,
      },

      {
        controlType: 'textbox',
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
      },

      {
        controlType: 'textbox',
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      },

      {
        controlType: 'textarea',
        key: 'addressLine1',
        label: 'Address',
        type: 'textarea',
        order: 4,
      },

      {
        controlType: 'textbox',
        key: 'postalCode',
        label: 'Postal Code',
        type: 'number',
        order: 5,
      },

      {
        controlType: 'radiogroup',
        key: 'shipping',
        type: 'radiogroup',
        value: 'free',
        options: [
          { key: 'free', value: 'Free Shipping' },
          { key: 'priority', value: 'Priority Shipping' },
          { key: 'nextday', value: 'Next Day Shipping' },
        ],
        order: 6,
      },

      {
        controlType: 'checkbox',
        key: 'privilege',
        type: 'checkbox',
        label: 'Privilege',
        order: 7,
        value: false,
      },

      {
        controlType: 'datepicker',
        key: 'dateOfBirth',
        type: 'datepicker',
        label: 'Date of Birth',
        order: 8,
      },
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
