import { Injectable } from '@angular/core';

export type Submission = {
  name: string;
  totalPrice: number;
}

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
