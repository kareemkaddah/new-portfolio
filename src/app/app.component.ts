import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InfoBoxComponent } from './info-box/info-box.component';
import { SkillBoxComponent } from './skill-box/skill-box.component';
import { ProjectsComponent } from './projects/projects.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    InfoBoxComponent,
    SkillBoxComponent,
    ProjectsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'personal-portfolio';
}
