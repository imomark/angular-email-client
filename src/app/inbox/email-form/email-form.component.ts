import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Email } from '../email';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  @Input() email:Email;
  emailForm: FormGroup;
  @Output() emailSubmit = new EventEmitter();
  constructor() { }

  ngOnInit() {
    const {subject, to , from ,text} = this.email;
    this.emailForm = new FormGroup({
      to:new FormControl(to,[
        Validators.required,
        Validators.email
      ]),
      from: new FormControl({value : from, disabled:true}),
      subject: new FormControl(subject,[
        Validators.required
      ]),
      text: new FormControl(text,[
        Validators.required
      ])
    });
  }

  onSubmit(){
    if(this.emailForm.invalid)
    return;
    this.emailSubmit.emit(this.emailForm.value);
  }

}
