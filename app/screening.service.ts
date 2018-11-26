import { Injectable } from '@angular/core';
import { Screening } from './screening';

@Injectable({
  providedIn: 'root'
})
export class ScreeningService {
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
  constructor() { }
  getScreenings(): Screening[] {
    return this.screenings;
  }

  getScreening(id: number): Screening {
    return this.screenings.find(screening => screening.id === id);
  }

  modifyScreening(id: number, screening: Screening) {
    const oScreening = this.getScreening(id);
    Object.assign(oScreening, screening);
  }
}
