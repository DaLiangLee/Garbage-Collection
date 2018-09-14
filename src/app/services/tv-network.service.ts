import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TvNetworkUpdate } from '../models/tv-network-update';
import { TvNetwork } from '../models/tv-network';

@Injectable()
export class TvNetworkService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getTvNetworks() {
    return this.http.get<any[]>('api/tvnetworks');
  }

  getById(id: number | string): Observable<TvNetwork> {
    return this.http.get<TvNetwork>(`/api/tvnetworks/${id}`);
  }

  create(createModel: any): Observable<TvNetworkUpdate> {
    console.log(createModel);

    return this.http.post<TvNetworkUpdate>('/api/tvnetworks', createModel, this.httpOptions);
  }

  update(id: string | number, updateModel: TvNetworkUpdate): Observable<TvNetworkUpdate> {
    return this.http.put<TvNetworkUpdate>(`/api/tvnetworks/${id}`, updateModel, this.httpOptions);
  }

  delete(id: string | number): Observable<any> {
    return this.http.delete(`/api/tvnetworks/${id}`, this.httpOptions);
  }

}
