import { Injectable } from '@angular/core';

@Injectable()
export class ScoreService {
  private score = 0
  private numRight = 0
  constructor() { }

  uploadScore(score: number, numRight: number) {
    this.score = score
    this.numRight = numRight
  }
  
  getScore() {
    return this.score
  }
  
  getNumRight() {
    return this.numRight
  }

  getImageArray() {
    let arr = []
    while (arr.length < 5) {
      var randomnumber = Math.floor(Math.random()*10);
      if(arr.indexOf(randomnumber) > -1) continue;
      arr[arr.length] = randomnumber;      
    }
    return arr
  }
}
