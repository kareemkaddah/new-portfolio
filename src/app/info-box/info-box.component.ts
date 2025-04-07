import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-box',
  imports: [],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss',
})
export class InfoBoxComponent {
  @Input() companyName: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() duration: string = '';
  @Input() website: string = '';
  openWebsite(): void {
    if (this.website) {
      window.open(this.website, '_blank'); // Opens the link in a new tab
    }
  }
}
