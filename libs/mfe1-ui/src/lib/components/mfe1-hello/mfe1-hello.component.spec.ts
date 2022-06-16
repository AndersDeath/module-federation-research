import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe1HelloComponent } from './mfe1-hello.component';

describe('Mfe1HelloComponent', () => {
  let component: Mfe1HelloComponent;
  let fixture: ComponentFixture<Mfe1HelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mfe1HelloComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Mfe1HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
