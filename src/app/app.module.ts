import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechSkillsComponent } from './components/tech-skills/tech-skills.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { OtherCertificationsComponent } from './components/other-certifications/other-certifications.component';
import { ProfileService } from './services/ProfileService';

@NgModule({
  declarations: [
    AppComponent,
    TechSkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationsComponent,
    SummaryComponent,
    ProfileHeaderComponent,
    StatisticsComponent,
    OtherCertificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ProfileService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
