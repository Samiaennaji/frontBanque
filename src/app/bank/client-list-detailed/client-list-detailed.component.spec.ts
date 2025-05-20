import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListDetailedComponent } from './client-list-detailed.component';

describe('ClientListDetailedComponent', () => {
  let component: ClientListDetailedComponent;
  let fixture: ComponentFixture<ClientListDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientListDetailedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientListDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
