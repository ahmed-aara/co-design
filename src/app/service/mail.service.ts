import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendMail(data: any): Observable<any> {
    return this.http.post('https://agcodesign.ae/server/public/api/send-email', data)
  }

}
