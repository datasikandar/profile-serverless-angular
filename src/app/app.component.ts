import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Profile } from './models/Profile';

// import * as profile from '../data/profile.json';
import { Project } from './models/Project';
import { Experience } from './models/Experience';
import { Education } from './models/Education';
import { Certification } from './models/Certification';
import { Personal } from './models/Personal';

import { ProfileService } from './services/ProfileService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile-angular';

  profileObservable: Observable<any>;
  profile: Profile;

  /*profile:  Profile  = (profile  as  any).default;

  statistics: Map<String, String> = this.profile?.statistics;
  personal: Personal = this.profile?.personal;
  summary: String[] = this.profile?.summary;
  technicalSkills: Map<String, String[]> = this.profile?.technicalSkills;
  certifications: Certification[] = this.profile?.certifications;
  otherCertifications: Certification[] = this.profile?.otherCertifications;
  education: Education[] = this.profile?.education;
  experience: Experience[] = this.profile?.experience;
  projects: Project[] = this.profile?.projects;*/

  statistics: Map<String, String>;
  personal: Personal;
  summary: String[];
  technicalSkills: Map<String, String[]>;
  certifications: Certification[];
  otherCertifications: Certification[];
  education: Education[];
  experience: Experience[];
  projects: Project[];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {

    this.profileObservable = this.profileService.load();

    this.profileObservable.subscribe((data: any) => {
      this.profile = data['data'];

      this.statistics = this.profile.statistics;
      console.log("Statistics = " + JSON.stringify(this.statistics));

      this.personal = this.profile.personal;
      console.log("Personal = " + JSON.stringify(this.personal));

      this.summary = this.profile.summary;
      console.log("Summary = " + JSON.stringify(this.summary));

      this.technicalSkills = this.profile.technicalSkills;
      console.log("Technical Skills = " + JSON.stringify(this.technicalSkills));

      this.certifications = this.profile.certifications;
      console.log("Certifications = " + JSON.stringify(this.certifications));

      this.otherCertifications = this.profile.otherCertifications;
      console.log("Other Certifications = " + JSON.stringify(this.otherCertifications));

      this.education = this.profile.education;
      console.log("Education = " + JSON.stringify(this.education));

      this.experience = this.profile.experience;
      console.log("Experience = " + JSON.stringify(this.experience));

      this.projects = this.profile.projects;
      console.log("Projects = " + JSON.stringify(this.projects));

    });
    
  }

}
