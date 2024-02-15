import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule} from '@angular/forms';
// import {NgxPaginationModule} from 'ngx-pagination';
// import { GithubModule } from './github/github.module';
import { GithubcomponentComponent } from './github/githubcomponent/githubcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubcomponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // GithubModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
