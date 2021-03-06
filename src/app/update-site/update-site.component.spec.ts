import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSiteComponent } from './update-site.component';

describe('UpdateSiteComponent', () => {
  let component: UpdateSiteComponent;
  let fixture: ComponentFixture<UpdateSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
