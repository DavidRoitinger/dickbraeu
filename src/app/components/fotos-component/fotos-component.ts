import { Component } from '@angular/core';
import { GalleryItemComponent } from '../gallery-item-component/gallery-item-component';

@Component({
  selector: 'app-fotos-component',
  imports: [
    GalleryItemComponent
  ],
  templateUrl: './fotos-component.html',
  styleUrl: './fotos-component.scss',
})
export class FotosComponent {
  
}
