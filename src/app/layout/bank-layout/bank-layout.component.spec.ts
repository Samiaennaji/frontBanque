import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankLayoutComponent } from './bank-layout.component';

describe('BankLayoutComponent', () => {
  let component: BankLayoutComponent;
  let fixture: ComponentFixture<BankLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
