import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListBasicComponent } from './client-list-basic.component';

describe('ClientListBasicComponent', () => {
  let component: ClientListBasicComponent;
  let fixture: ComponentFixture<ClientListBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientListBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientListBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
