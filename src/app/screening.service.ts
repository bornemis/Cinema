import { Injectable } from '@angular/core';
import { Screening } from './screening';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', // admin/password
  })
};
@Injectable({
  providedIn: 'root'
})
export class ScreeningService {
  private screeningUrl = 'http://localhost:8080/screenings';
  screenings: Screening[] = [
    {
      id: 1,
      movieTitle: "Micsoda nő",
      roomName: "16",
      startTime: '13:30',
      movieDurationInMin: 125,
      dType: "2D",
      screeningLanguage: 'ENG',
      subscription: 'HUN',
    },
    {
      id: 2,
      movieTitle: "Peppermint: A bosszú angyala",
      roomName: "20",
      startTime: '17:00',
      movieDurationInMin: 101,
      dType: "3D",
      screeningLanguage: 'HUN',
      subscription: 'NONE',
    },{
        id: 3,
        movieTitle: "A Keresztapa",
        roomName: "20",
        startTime: '20:30',
        movieDurationInMin: 125,
        dType: "2D",
        screeningLanguage: 'ENG',
        subscription: 'NONE',
    },{
        id: 4,
        movieTitle: "A Keresztapa",
        roomName: "16",
        startTime: '15:30',
        movieDurationInMin: 125,
        dType: "2D",
        screeningLanguage: 'HUN',
        subscription: 'ENG',
    }
  ]
  constructor(private http: HttpClient) { }
  getScreenings(): Promise<Screening[]> {
    return this.http.get<Screening[]>(
      this.screeningUrl,
      httpOptions
    ).toPromise();
  }

  getScreening(id: number): Promise<Screening> {
    return this.http.get<Screening>(
      `${this.screeningUrl}/${id}`,
      httpOptions
    ).toPromise();
  }

  modifyScreening(id: number, screening: Screening) :Promise<Screening> {
    return this.http.put<Screening>(
      `${this.screeningUrl}/${id}`,
      screening,
      httpOptions
    ).toPromise();
  }
  addScreening(screening: Screening) : Promise<Screening> {
    return this.http.post<Screening>(
      this.screeningUrl,
      screening,
      httpOptions
    ).toPromise();
  }
  deleteScreening(id:number){
    return this.http.delete<Screening>(
      `${this.screeningUrl}/${id}`,
      httpOptions
    ).toPromise();
  }
}
