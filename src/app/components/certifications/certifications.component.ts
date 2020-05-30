import { Component, OnInit, Input } from '@angular/core';
import { Certification } from 'src/app/models/Certification';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  @Input() certifications: Certification[];

  constructor() { }

  ngOnInit(): void {
  }

}
