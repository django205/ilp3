import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { IssuesComponent } from './issues/issues.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { IssueComponent } from './issue/issue.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/issues', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'issues', component: IssuesComponent },
    { path: 'add', component: AddIssueComponent },
    { path: 'edit/:id', component: EditIssueComponent },
    { path: 'issue/:id', component: IssueComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
