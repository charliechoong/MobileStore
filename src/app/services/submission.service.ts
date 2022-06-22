import { Injectable } from '@angular/core';
import { Submission } from 'src/app/models/submission'

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  constructor() { }

  customerSubmission: Submission = { name: "", totalPrice: 0 }

  addSubmission(submission: Submission): void {
    this.customerSubmission = submission
  }

  getSubmission(): Submission {
    return this.customerSubmission;
  }
}
