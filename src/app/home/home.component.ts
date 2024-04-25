
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, state } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
    trigger('downToUp',[
      state('void', style({
        transform: 'translateY[100%]',
        opacity: 0,
        duration:600
      })),
      transition('void <=> *', animate('500ms ease-in-out')),
    ]),
  ]
})


export class HomeComponent implements OnInit {
  isAnimeComplete: boolean = true;
  ngOnInit() {
  
  }
}
