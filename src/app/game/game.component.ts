import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit, OnDestroy {  
  score = 0
  count = 0
  round = 0
  numRight = 0
  countDown
  imageIndexArray = []
  image_a = ""
  image_b = ""
  imageArray = []
  constructor(private scoreService: ScoreService, private router: Router) {
    this.imageIndexArray = this.scoreService.getImageArray()
  }

  ngOnInit() {
    this.processScore()
    this.countDown = Observable.timer(0,1000).subscribe((t) => {
      this.count--
      if (this.count == 0) {
        this.processScore()
      }
    })   
    
  }
  ngOnDestroy() {
    this.countDown.unsubscribe()
  }
  
  onClick(event: Event) {   
    if ((<HTMLImageElement>event.target).src == (<HTMLImageElement>event.target).baseURI + this.image_a) {
      this.numRight++
    } else {
      this.count = 0
    }
    this.processScore()
  }

  processScore(){   
    this.round++
    this.score += this.count
    this.count = 30     
    this.processImageArray()    
    if (this.round > 5) {
      this.scoreService.uploadScore(this.score, this.numRight)
      this.router.navigate(['result'])
    }    
  }
  processImageArray() {    
    this.image_a = "assets/images/a/0" + this.imageIndexArray[this.round-1] + "-a.jpg"
    this.image_b = "assets/images/b/0" + this.imageIndexArray[this.round-1] + "-b.jpg"
    this.imageArray[0] = this.image_a
    for (let i = 1; i < 4; i++) {
      this.imageArray[i] = this.image_b
    }
    for (let i = this.imageArray.length-1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.imageArray[i], this.imageArray[j]] = [this.imageArray[j], this.imageArray[i]];   
    }
  }
}
