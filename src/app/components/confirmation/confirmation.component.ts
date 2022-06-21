import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../../services/submission.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  name: string = ""
  totalPrice: number = 0

  constructor(private submissionService: SubmissionService) { }

  ngOnInit(): void {
    const submissionDetails = this.submissionService.getSubmission();
    this.name = submissionDetails.name;
    this.totalPrice = submissionDetails.totalPrice;
  }

}
