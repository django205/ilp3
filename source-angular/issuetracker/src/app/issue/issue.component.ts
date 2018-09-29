import { Component, OnInit } from '@angular/core';
import { IssueService } from "../issue.service";
//import { Issue } from '../issue';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  issue: any;
  id;
  constructor(private _issueService: IssueService, private route: ActivatedRoute, private location: Location) {

  }

  ngOnInit() {

    this.route.params.forEach((params: Params) => this.id = +params['id'])
    this.getIssue(this.id);
  }

  getIssue(id) {
    this._issueService.getIssue(id).subscribe((issue) => this.issue = issue)
  }

  goBack() {
    this.location.back();
  }

}
