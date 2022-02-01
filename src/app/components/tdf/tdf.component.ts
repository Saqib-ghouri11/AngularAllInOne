import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TDFComponent implements OnInit {
  interests=['angular','react','vue']
  constructor() { }

  ngOnInit(): void {
  }

}
