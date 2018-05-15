import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private insertUrl = '/api/insert';
  private getDataUrl = '/api/getData';
  constructor(private http:HttpClient) { }
  
  insertInput(arg) {
    console.log("in service!!");
    console.log("value to be inserted is:" +arg);
    const body = {
      name: arg
    };
    const result = this.http.post<any>(this.insertUrl,body ,httpOptions);
    console.log(JSON.stringify(result));
    return result
}

getData() {
  var result= this.http.get(this.getDataUrl);
  return result;
}
}
