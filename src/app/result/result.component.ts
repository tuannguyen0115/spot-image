import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  score = 0
  numRight = 0
  constructor(private scoreService: ScoreService) {
    this.score = this.scoreService.getScore()
    this.numRight = this.scoreService.getNumRight()
  }

  ngOnInit() {
  }

}
  