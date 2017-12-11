import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class DataFetcherService {
  constructor(private http: HttpClient) {
  }

  POST(url: string, body?: Object) {

    return this.http.post(url, body, {
      headers: new HttpHeaders({
        "Access-Control-Allow-Headers": "accessControlRequestHeaders",
        "Access-Control-Expose-Headers": "exposedHeaders",
        "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
        "Access-Control-Allow-Origin": "*"
      })
    });
  }

  GET(url: string) {

    return this.http.get(url, {
      headers: new HttpHeaders({
        // "Access-Control-Allow-Headers": "accessControlRequestHeaders",
        // "Access-Control-Expose-Headers": "exposedHeaders",
        // "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD, OPTIONS",
        // // "Access-Control-Allow-Origin": "*"
      })
    });
  }
}
