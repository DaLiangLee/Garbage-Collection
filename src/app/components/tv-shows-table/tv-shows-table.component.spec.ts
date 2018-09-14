import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsTableComponent } from './tv-shows-table.component';
import { ToastrService, ToastrModule, ToastPackage } from 'ngx-toastr';

describe('TvShowsTableComponent', () => {
  let component: TvShowsTableComponent;
  let fixture: ComponentFixture<TvShowsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      declarations: [TvShowsTableComponent],
      providers: [ToastrService, ToastPackage]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
