import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from './services/api.service';
import { FormControl, FormsModule } from '@angular/forms'
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  getUser = 0;
  getRepo = 0;
  getLanguage = 0;
  inputName:any;
  inputRepo: any[] = [];
  inputLanguage: any[] = [];
  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    //this.apiService.getUser('johnpapa').subscribe();
  }

  getInput(name:string){
    this.apiService.getUser(name).subscribe((data) =>{
      this.inputName = data;
      this.getUser = 1;
      console.warn("data", data);
      this.getRepoInput(name);
    });
  }

  getRepoInput(name:string){
    this.apiService.getRepo(name).subscribe((data : any[]) =>{
      this.inputRepo = data;
      this.getRepo = 1;
      console.warn("data", data);
      let i = 0;
      for (let repo of this.inputRepo) {
       this.inputLanguage[i] = this.getLanguageInput(name, repo);
       i++;
      }
      //this.indexChange(0);
    });
  }

  getLanguageInput(name:string, reponame:any){
    console.log(reponame);
      this.apiService.getLanguage(name, reponame?.name).subscribe((data : any) =>{
        this.getLanguage = 1;
        console.warn("data", data);
        return data;
      });
    }
  }

  // updatedRepo : any[] = [];
  // currentIndex = 0;

  // indexChange(num: number) {
  //   console.log(num);
  //   if (this.currentIndex+num < 0  && this.currentIndex >= this.inputRepo.length) {
  //     return;
  //   }
  //   this.currentIndex += num;
  //   this.updatedRepo = [];
  //   for (let index = this.currentIndex; index < this.currentIndex+10  && index < this.inputRepo.length; index++) {
  //     console.log(this.inputRepo[index]);
      
  //     this.updatedRepo.push(this.inputRepo[index]);
  //   }
  //   console.log(this.updatedRepo);
  // }
