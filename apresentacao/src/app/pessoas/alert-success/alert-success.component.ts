import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-success',
  templateUrl: './alert-success.component.html',
  styleUrls: ['./alert-success.component.scss']
})
export class AlertSuccessComponent {

  @Input() messageAlert = '';
  @Output() closeAlert = new EventEmitter();

  alertClose() {
    this.closeAlert.emit(true);
  }
}
