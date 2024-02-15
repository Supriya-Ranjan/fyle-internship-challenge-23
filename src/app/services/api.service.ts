import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  getRepo(githubUsername: string) : Observable<any[]> {
    return this.httpClient.get<any[]>(`https://api.github.com/users/${githubUsername}/repos`);
    //?per_page=10
  }
  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
  getLanguage(githubUsername: string, githubRepoName: string){
    return this.httpClient.get<any[]>(`https://api.github.com/repos/${githubUsername}/${githubRepoName}/languages`);
    //https://api.github.com/repos/Supriya-Ranjan/Apni-Dukan/languages
  }
}
