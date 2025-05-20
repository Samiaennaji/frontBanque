import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServicesManageComponent } from './client-services-manage.component';

describe('ClientServicesManageComponent', () => {
  let component: ClientServicesManageComponent;
  let fixture: ComponentFixture<ClientServicesManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientServicesManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientServicesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
