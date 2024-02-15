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

  getArrayLenght(){
    const n: number = this.repos.length; // length of the array
    const dynamicArray: any[] = Array.from({ length: n/this.pageSize });
    // console.log(dynamicArray);
    return dynamicArray;
  }

  getIndex(pageIndex:any){
    this.startIndex = pageIndex * this.pageSize;
   this.endIndex = this.startIndex + this.pageSize;
   console.log(this.startIndex);
  }
  prevIndex(length:any){
    this.startIndex = this.endIndex - length;
   this.endIndex = this.endIndex - this.pageSize;
   if(this.startIndex<=0){
    this.startIndex =0
    this.endIndex = this.pageSize;
   }
    console.log(this.startIndex)
  }
  nextIndex(endIndex:any){
    this.startIndex = this.endIndex - length;
   this.endIndex = this.endIndex - this.pageSize;
   if(this.endIndex>=this.repos.length){
    this.endIndex = this.repos.length;
    //this.startIndex = this.pageSize;
   }
    console.log(this.endIndex)
  }
}
