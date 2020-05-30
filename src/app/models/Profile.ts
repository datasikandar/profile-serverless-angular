import { Project } from '../models/Project';
import { Experience } from './Experience';
import { Education } from './Education';
import { Certification } from './Certification';
import { Personal } from './Personal';

export interface Profile {
    statistics: Map<String, String>;
    personal: Personal;
    summary: String[];
    technicalSkills: Map<String, String[]>;
    certifications: Certification[];
    otherCertifications: Certification[];
    education: Education[];
    experience: Experience[];
    projects: Project[];
}