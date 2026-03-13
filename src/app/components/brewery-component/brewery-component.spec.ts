import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryComponent } from './brewery-component';

describe('BreweryComponent', () => {
  let component: BreweryComponent;
  let fixture: ComponentFixture<BreweryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreweryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreweryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
