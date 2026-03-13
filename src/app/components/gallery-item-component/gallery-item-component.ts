import { Component, input } from '@angular/core';

@Component({
  selector: 'app-gallery-item-component',
  imports: [],
  templateUrl: './gallery-item-component.html',
  styleUrl: './gallery-item-component.scss',
})
export class GalleryItemComponent {

  path = input.required<string>();
  description = input.required<string>();

}
