import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubcomponentComponent } from './githubcomponent.component';

describe('GithubcomponentComponent', () => {
  let component: GithubcomponentComponent;
  let fixture: ComponentFixture<GithubcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubcomponentComponent]
    });
    fixture = TestBed.createComponent(GithubcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
