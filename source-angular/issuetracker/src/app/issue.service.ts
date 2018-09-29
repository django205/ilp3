import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Issue } from "./issue";

@Injectable()
export class IssueService {
    private url = "http://localhost:3000/issue";

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private http: HttpClient) { }

    getIssues() {
        return this.http.get(this.url);
    }
    getIssue(id: number) {
        return this.http.get(`${this.url}/get/${id}`);
    }

    addIssue(issue) {
        return this.http.post(`${this.url}/create`, JSON.stringify(issue), this.httpOptions);
    }
    editIssue(issue, id) {
        return this.http.post(`${this.url}/edit/${id}`, JSON.stringify(issue), this.httpOptions);
    }
    deleteIssue(id) {
        return this.http.get(`${this.url}/delete/${id}`);
    }

}