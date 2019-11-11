import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItermComponent } from './recipe-iterm.component';

describe('RecipeItermComponent', () => {
  let component: RecipeItermComponent;
  let fixture: ComponentFixture<RecipeItermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeItermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
