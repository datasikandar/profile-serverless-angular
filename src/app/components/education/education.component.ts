import { Component, OnInit, Input } from '@angular/core';
import { Education } from 'src/app/models/Education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() education: Education[];

  constructor() { }

  ngOnInit(): void {
  }

}
