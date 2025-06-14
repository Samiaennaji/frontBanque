import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUpdateComponent } from './client-update.component';

describe('ModifyComponent', () => {
  let component: ClientUpdateComponent;
  let fixture: ComponentFixture<ClientUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
