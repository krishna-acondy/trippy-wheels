import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from 'ngx-image-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(NgxImageGalleryComponent) homestaysGallery: NgxImageGalleryComponent;

  conf: GALLERY_CONF = {
    backdropColor: 'rgb(250, 250, 250)',
    imageOffset: '0px',
    showCloseControl: false,
    showDeleteControl: false,
    showImageTitle: false,
    inline: true
  };

  slideshowImages = [
    'assets/logo.png',
    'assets/locations/1.jpg',
    'assets/locations/2.jpg',
    'assets/locations/3.jpg',
    'assets/locations/4.jpg',
    'assets/locations/5.jpg',
    'assets/locations/6.jpg',
    'assets/locations/7.jpg',
  ];

  caravanImages: GALLERY_IMAGE[] = [
    {
      url: 'assets/interiors/1.jpg',
      altText: '1.jpg',
      title: 'Home Stays 1',
      thumbnailUrl: 'assets/interiors/thumbnails/1.jpg'
    },
    {
      url: 'assets/interiors/2.jpg',
      altText: '2.jpg',
      title: 'Home Stays 2',
      thumbnailUrl: 'assets/interiors/thumbnails/2.jpg'
    },
    {
      url: 'assets/interiors/3.jpg',
      altText: '3.jpg',
      title: 'Home Stays 3',
      thumbnailUrl: 'assets/interiors/thumbnails/3.jpg'
    },
    {
      url: 'assets/interiors/4.jpg',
      altText: '4.jpg',
      title: 'Home Stays 4',
      thumbnailUrl: 'assets/interiors/thumbnails/4.jpg'
    }
  ];

  homestayImages: GALLERY_IMAGE[] = [
    {
      url: 'assets/homestays/1.jpg',
      altText: '1.jpg',
      title: 'Home Stays 1',
      thumbnailUrl: 'assets/homestays/thumbnails/1.jpg'
    },
    {
      url: 'assets/homestays/2.jpg',
      altText: '2.jpg',
      title: 'Home Stays 2',
      thumbnailUrl: 'assets/homestays/thumbnails/2.jpg'
    },
    {
      url: 'assets/homestays/3.jpg',
      altText: '3.jpg',
      title: 'Home Stays 3',
      thumbnailUrl: 'assets/homestays/thumbnails/3.jpg'
    },
    {
      url: 'assets/homestays/4.jpg',
      altText: '4.jpg',
      title: 'Home Stays 4',
      thumbnailUrl: 'assets/homestays/thumbnails/4.jpg'
    }
  ];

  openHomestaysGallery(index: number = 0) {
    this.homestaysGallery.open(index);
    return false;
  }
}
