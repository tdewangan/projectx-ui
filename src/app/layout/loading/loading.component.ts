import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoaderService } from './loader-service';

@Component({
  selector: 'zul-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {
  constructor(public loader: LoaderService) {}
}
