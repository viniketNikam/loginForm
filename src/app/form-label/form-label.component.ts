import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-label',
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.css'],
})
export class FormLabelComponent {
  @Input() Label: string = '';
}
