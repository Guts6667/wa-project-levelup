import { Injectable } from '@angular/core';
import { Settings } from '../interfaces/settings';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  static getSettings() {
    throw new Error('Method not implemented.');
  }
  public settings: Settings[] = [];

  constructor(private httpClient: HttpClient) {}

  public getSettings(): Observable<Settings[]> {
    return this.httpClient
      .get<Settings[]>('http://localhost:3000/settings')
      .pipe(
        map((settings: Settings[]) => {
          this.settings = settings;
          return settings;
        })
      );
  }

  // problème de recupération de settings, pour l'instant c'est du chiffre en dure
  public currentLevel(userXp: number) {
    // console.log(this.settings);
    // const levelOneXp = this.settings.xpFirstLevel;
    const levelOneXp = 1000;
    let level: number = 1;
    let NextLevelXP: number = levelOneXp;
    for (level = 1; level < 50; level++) {
      if (userXp < NextLevelXP) break;
      else NextLevelXP += levelOneXp * Math.pow(1.5, level - 1);
    }
    return level;
  }

  public xpNeededToNextLevel(userXp: number) {
    let xpNeeded: number = 0;
    const levelOneXp = 1000;
    let level: number = 1;
    let NextLevelXP: number = levelOneXp;
    for (level = 1; level < 50; level++) {
      if (userXp < NextLevelXP) {
        xpNeeded = NextLevelXP - userXp;
        break;
      }
      NextLevelXP += levelOneXp * Math.pow(1.5, level - 1);
    }
    return xpNeeded;
  }

  public progressForLevelUp(userXp: number) {
    let xpInThisLevel: number = 0; // xp gained in this level
    let progressInThisLevel: number = 0; // ratio of progress in this level
    const levelOneXp = 1000;
    let level: number = 1;
    let CurrentLevelXP: number = 0;
    let NextLevelXP: number = levelOneXp;
    let xpGapBetweenLevel: number = levelOneXp; // xp needed for reaching next level from current level start

    for (level = 1; level < 50; level++) {
      xpGapBetweenLevel = levelOneXp * Math.pow(1.5, level - 1);
      if (userXp < NextLevelXP) {
        xpInThisLevel = userXp - CurrentLevelXP;
        progressInThisLevel = xpInThisLevel / xpGapBetweenLevel;
        break;
      }
      CurrentLevelXP = NextLevelXP;
      NextLevelXP += xpGapBetweenLevel;
    }
    return progressInThisLevel;
  }
}
