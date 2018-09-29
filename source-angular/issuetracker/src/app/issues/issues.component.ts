import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { Issue } from "../issue";
@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues: Issue[];
  show: boolean = true;
  showSev: boolean = true;
  showStat: boolean = true;
  showCd: boolean = true;
  showRd: boolean = true;
  constructor(private _issueService: IssueService) { }

  ngOnInit() {
    this.getIssues();
  }
  getIssues() {
    this._issueService.getIssues().subscribe((issues: any) => this.issues = issues);
  }
  deleteIssue(id) {
    this._issueService.deleteIssue(id).subscribe((data: any) => this.getIssues());
    window.location.reload()
  }

  onBulkDelete() {
    for (let i = 0; i < this.issues.length; i++) {
      if (this.issues[i].selected === true) {
        this.deleteIssue(this.issues[i].id);
      }
    }
  }

  reset() {
    this.show = true;
    this.showSev = true;
    this.showStat = true;
    this.showCd = true;
    this.showRd = true;
  }
}
