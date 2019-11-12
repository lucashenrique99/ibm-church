import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-christian-videos',
  templateUrl: './christian-videos.component.html',
  styleUrls: ['./christian-videos.component.scss']
})
export class ChristianVideosComponent implements OnInit {

  videos: Array<SafeResourceUrl>;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const videos = [
      'https://www.youtube.com/embed/54k2KlwCLvM',
      'https://www.youtube.com/embed/54k2KlwCLvM',
      'https://www.youtube.com/embed/54k2KlwCLvM',
    ]

    this.videos = videos.map(url => this.sanitizer.bypassSecurityTrustResourceUrl(url));

  }

}
