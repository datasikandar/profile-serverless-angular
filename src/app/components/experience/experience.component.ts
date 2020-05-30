import { Component, OnInit, Input } from '@angular/core';

import { Experience } from 'src/app/models/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() experience: Experience[];

  constructor() { }

  ngOnInit(): void {
  }

}
