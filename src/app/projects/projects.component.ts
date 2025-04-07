import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @Input() projectDescription: string = '';
  @Input() projectImage: string = '';
  @Input() projectName: string = '';
}
