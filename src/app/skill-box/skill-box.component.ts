import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-box',
  imports: [],
  templateUrl: './skill-box.component.html',
  styleUrl: './skill-box.component.scss',
})
export class SkillBoxComponent {
  @Input() skill: string = '';
}
