import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { IssuesComponent } from './issues/issues.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { IssueComponent } from './issue/issue.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IssueService } from "./issue.service";
import { HttpClientModule } from "@angular/common/http";
import { IssueFilterPipe } from './issue-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IssuesComponent,
    AddIssueComponent,
    IssueComponent,
    EditIssueComponent,
    NotFoundComponent,
    IssueFilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
