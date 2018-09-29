import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { IssueService } from '../issue.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {

  severities: string[] = ["Low", "Medium", "High"];
  statuses: string[] = ["Open", "In-Progress", "Closed"];
  constructor(private router: Router, private _issueService: IssueService) {
  }

  ngOnInit() {
  }
  onSubmit(formValue: any) {

    let issue: Issue = {
      id:1,
      description: formValue.description,
      severity: formValue.severity,
      status: formValue.status,
      createdDate: formValue.createdDate,
      resolvedDate: formValue.resolvedDate,
      selected: false
    }
    this._issueService.addIssue(issue).subscribe();
    this.router.navigate(['issues']);
  }
}
