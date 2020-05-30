import { Component, OnInit, Input } from '@angular/core';

import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input() projects: Project[];

  constructor() { }

  ngOnInit(): void {
  }

}
