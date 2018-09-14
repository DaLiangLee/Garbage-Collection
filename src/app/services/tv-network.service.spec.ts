import { TestBed, inject } from '@angular/core/testing';

import { TvNetworkService } from './tv-network.service';
import { ToastrModule, ToastrService, ToastPackage } from 'ngx-toastr';

describe('TvNetworkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [TvNetworkService,ToastrService, ToastPackage]
    });
  });

  it('should be created', inject([TvNetworkService], (service: TvNetworkService) => {
    expect(service).toBeTruthy();
  }));
});
