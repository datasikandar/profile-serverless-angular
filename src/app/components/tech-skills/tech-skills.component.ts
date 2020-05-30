import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.css']
})
export class TechSkillsComponent implements OnInit {

  @Input() skills: Map<String, String[]>;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
