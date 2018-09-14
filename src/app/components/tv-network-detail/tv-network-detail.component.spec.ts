import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvNetworkDetailComponent } from './tv-network-detail.component';
import { ToastrModule, ToastrService, ToastPackage } from 'ngx-toastr';

describe('TvNetworkDetailComponent', () => {
  let component: TvNetworkDetailComponent;
  let fixture: ComponentFixture<TvNetworkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      declarations: [TvNetworkDetailComponent],
      providers: [ToastrService, ToastPackage]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvNetworkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
