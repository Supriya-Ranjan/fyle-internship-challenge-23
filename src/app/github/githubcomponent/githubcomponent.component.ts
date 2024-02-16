import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-githubcomponent',
  templateUrl: './githubcomponent.component.html',
  styleUrls: ['./githubcomponent.component.scss']
})
export class GithubcomponentComponent {
  @Input() userId : any;
  @Input() getUser = 0;
  @Input() getRepo = 0;
  @Input() repos : any[] = [];
  @Input() getLanguage = 0;
  @Input() languages : any[] = [];

  startIndex = 0;
  endIndex = 5;
  pageSize=5;

  constructor(){
    
  }

  getArrayLenght() {
    return Array.from({ length: this.repos.length / this.pageSize });
  }

  getIndex(pageIndex: any) {
    this.startIndex = pageIndex * this.pageSize;
    this.endIndex = this.min(this.startIndex + this.pageSize, this.repos.length-1);
    console.log(this.startIndex);
  }

  changeIndex(i: number) {
    if (this.startIndex + this.pageSize > this.repos.length) {
      return;
    }
    this.startIndex = this.startIndex + this.pageSize * i;
    this.endIndex = this.min(this.endIndex + this.pageSize * i, this.repos.length);
    if (this.startIndex <= 0) {
      this.startIndex = 0;
      this.endIndex = this.min(this.pageSize, this.repos.length);
    }
    console.log(this.startIndex, this.endIndex);
  }

  min(a: number, b: number): number {
    return a > b ? b : a;
  }
}
