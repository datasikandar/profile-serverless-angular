import { Component, OnInit, Input } from '@angular/core';
import { Certification } from 'src/app/models/Certification';

@Component({
  selector: 'app-other-certifications',
  templateUrl: './other-certifications.component.html',
  styleUrls: ['./other-certifications.component.css']
})
export class OtherCertificationsComponent implements OnInit {

  @Input() otherCertifications: Certification[];

  constructor() { }

  ngOnInit(): void {
  }

}
