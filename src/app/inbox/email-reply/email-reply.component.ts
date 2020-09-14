import { Component, OnInit, Input } from '@angular/core';
import { Email } from '../email';
import { InboxService } from '../inbox.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent  {

  showModal = false;
  @Input() email:Email;
  constructor(private emailService:InboxService) { }

  ngOnChanges() {
    this.email = {
      ...this.email,
      from:this.email.to,
      to: this.email.from,
      subject: `RE:${this.email.subject}`,
      text:`\n\n\n---------------- ${this.email.from} wrote:\n>${this.email.text}`
    };
  }
  onSubmit(email: Email){
    this.emailService.sendEmail(email).subscribe(
      ()=>this.showModal = false
    );
  }

}
