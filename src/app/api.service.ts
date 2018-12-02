import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  API_URL = 'http://localhost:80001';

  constructor(private httpClient: HttpClient) {}

  getAccounts() {
    return this.httpClient.get(`${this.API_URL}/getUser`);
  }

  getContacts() {
    return this.httpClient.get(`${this.API_URL}/getEntries`);
  }
  createContact(contact) {
    return this.httpClient.post(`${this.API_URL}/createUser/`, contact);
  }
  updateContact(contact) {
    return this.httpClient.put(`${this.API_URL}/updateCreditor/`, contact);
  }
  deleteContact(contact) {
    return this.httpClient.delete(`${this.API_URL}/deleteCreditor/${contact.pk}`);
  }
  getLeads() {
    return this.httpClient.get(`${this.API_URL}/leads`);
  }
  getOpportunities() {
    return this.httpClient.get(`${this.API_URL}/opportunities`);
  }
}
