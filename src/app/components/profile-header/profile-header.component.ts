import { Component, OnInit, Input } from '@angular/core';
import { Personal } from 'src/app/models/Personal';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  @Input() statistics: Map<String, String>;
  @Input() personal: Personal;
  @Input() summary: String[];

  constructor() { }

  ngOnInit(): void {
  }

}
