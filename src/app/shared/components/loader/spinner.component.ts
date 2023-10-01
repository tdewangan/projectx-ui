import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpinnerService } from './spinner-service';

@Component({
  selector: 'zul-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  constructor(public spinner: SpinnerService) {}
}
