import { Component, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form1Component } from './form-1/form-1.component';
import { Form2Component } from './form-2/form-2.component';
import { Form4Component } from './form-4/form-4.component';
import { Form3Component } from './form-3/form-3.component';

const FORMS = {
  form1: 'form1',
  form2: 'form2',
  form3: 'form3',
  form4: 'form4',
} as const;

type FORM = (typeof FORMS)[keyof typeof FORMS];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  forms: Record<
    FORM,
    { form: FormGroup; save: () => void; component: Type<any> }
  > = {
    form1: {
      form: new FormGroup({}),
      save: () => {
        console.log('save 1');
      },
      component: Form1Component,
    },
    form2: {
      form: new FormGroup({}),
      save: () => {
        console.log('save 2');
      },
      component: Form2Component,
    },
    form3: {
      form: new FormGroup({}),
      save: () => {
        console.log('save 3');
      },
      component: Form3Component,
    },
    form4: {
      form: new FormGroup({}),
      save: () => {
        console.log('save 4');
      },
      component: Form4Component,
    },
  };
  options = Object.keys(this.forms).map((key) => ({ id: key }));
  selected = this.options[0].id as FORM;

  FORMS = FORMS;

  ngOnInit() {
    const componentRef = this.container.createComponent(
      this.forms[this.selected].component
    );
    componentRef.instance.form = this.forms[this.selected].form;
  }

  onChangeOption(option: FORM) {
    this.container.clear();
    const componentRef = this.container.createComponent(
      this.forms[option].component
    );
    componentRef.instance.form = this.forms[option].form;
  }

  onSave() {
    this.forms[this.selected].save();
  }
}
