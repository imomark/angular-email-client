import { Component, OnInit } from '@angular/core';
import { InboxService } from '../inbox.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css']
})
export class EmailIndexComponent implements OnInit {

  constructor(private emailService: InboxService) { }

  emails = [];
  ngOnInit() {
    this.emailService.getEmails().subscribe(
      (emails)=>{
        this.emails = emails;
      }
    );
  }

}
