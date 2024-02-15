import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { GithubcomponentComponent } from './githubcomponent/githubcomponent.component';

@NgModule({
  declarations: [
    GithubcomponentComponent
  ],
  imports: [
    CommonModule,
    GithubRoutingModule,
  ]
})
export class GithubModule { }
