import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  validateForm: FormGroup;
  controlArray = [];
  isCollapse = true;

  toggleCollapse() {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? (index < 6) : true;
    });
  }

  resetForm() {
    this.validateForm.reset();
  }
  optionsAsync = [];
  options = new Subject<Array<{}>>();


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      mselect: "lucy",
      radio : "jack"
    });
    for (let i = 0; i < 10; i++) {
      this.controlArray.push({ index: i, show: i < 6 });
      this.validateForm.addControl(`field${i}`, new FormControl());
    }
    this.validateForm.addControl("picker", new FormControl());
    this.validateForm.addControl("radio", new FormControl());
    // this.validateForm.addControl("mselect", new FormControl());

    let me = this;
    setTimeout(() => {
      this.options.next([
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]);


      // setTimeout(() => {
      //   me.options.next([
      //     { value: 'a', label: 'AJack' },
      //     { value: 'b', label: 'BLucy' },
      //     { value: 'C', label: 'CDisabled', disabled: true },
      //   ]);


      // }, 1000)


    }, 1000)



    this.options.subscribe((data) => {
      this.optionsAsync = data;
    });

  }

  search() {
    this.validateForm.controls['field1'].setErrors({ 'error': true });
    console.log(this.validateForm.value);
  }

  getFormControl(name) {
    return this.validateForm.controls[name];
  }
}
