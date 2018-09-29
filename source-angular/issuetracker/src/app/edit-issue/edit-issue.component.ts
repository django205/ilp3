import { Component, OnInit } from '@angular/core';
import { IssueService } from "../issue.service";
import { Issue } from "../issue";
import { Router } from "@angular/router";
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent implements OnInit {
  severities: string[] = ["Low", "Medium", "High"];
  statuses: string[] = ["Open", "In-Progress", "Closed"];
  id: any;
  issue: any;
  constructor(private router: Router, private _issueService: IssueService, private route: ActivatedRoute, private location: Location) {

  }

  ngOnInit() {

    this.route.params.forEach((params: Params) => this.id = +params['id'])
    this.getIssue(this.id);
  }

  getIssue(id) {
    this._issueService.getIssue(id).subscribe((issue) => this.issue = issue)
  }

  onSubmit(formValue: any) {
    let issue: Issue = {
      id: this.id,
      description: formValue.description,
      severity: formValue.severity,
      status: formValue.status,
      createdDate: formValue.createdDate,
      resolvedDate: formValue.resolvedDate,
      selected: false
    }
    this._issueService.editIssue(issue, this.id).subscribe();
    this.router.navigate(['issues']);
  }
}
