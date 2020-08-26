
// Rectiveforms 
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Skills
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';


export interface Skills_Tag {
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup;

  // Regex
  fullNamePattern = '^[a-zA-Z][a-zA-Z]+ [a-zA-Z][a-zA-Z]+$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  success_submit = null;

  ngOnInit(): void {
    // In order to set default value empty
    this.form = new FormGroup({
      email: new FormControl('', Validators.pattern(this.emailPattern)),
      name: new FormControl('', Validators.pattern(this.fullNamePattern)),
      register: new FormControl('', this.registrationValidator),
      phone: new FormControl('', this.phoneValidator),
    });
  }

  // Register Validation
  registrationValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }

    const integercheck = control.value.match(/^-{0,1}\d+$/);
    if (!integercheck) {
      return { register: 'Registration Number should be an integer' };
    }
    const register = parseInt(control.value, 10);

    if (register >= 1000000 && register < 10000000) {
      return null;
    } else {
      return { register: 'Registration Number should be of 7 Digit' };
    }
  }
  // Phone No. Validation
  phoneValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }

    const integercheck = control.value.match(/^-{0,1}\d+$/);
    if (!integercheck) {
      return { phone: 'Phone Number should be an integer' };
    }
    const phone = parseInt(control.value, 10);

    if (phone >= 1000000000 && phone < 10000000000) {
      return null;
    } else {
      return { phone: 'Phone Number should be of 10 Digit' };
    }
  }

  // Task 2  Tags
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  all_tags: Skills_Tag[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add  tag
    if ((value || '').trim() && this.all_tags.length < 5) {
      this.all_tags.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Skills_Tag): void {
    const index = this.all_tags.indexOf(tag);

    if (index >= 0) {
      this.all_tags.splice(index, 1);
    }
  }

  // summit Button
  onSubmit(FormItem) {
      this.success_submit = 'Successful Submit';
  }
}

