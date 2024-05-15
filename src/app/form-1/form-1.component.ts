import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-1',
  standalone: true,
  imports: [],
  template: ` form1 works`,
})
export class Form1Component {
  @Input({ required: true }) form: FormGroup = new FormGroup({});
}
