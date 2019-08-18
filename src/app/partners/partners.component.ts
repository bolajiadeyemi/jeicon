import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  partners = ['mitsubishi', 'Beijer Electronic', 'Frank Medical'];

  constructor() {
  }

  ngOnInit() {
  }

  getImageUrl(str: string) {
    const baseUrl = "./assets/images/mitsubishi.png";

    return `${baseUrl} card mb-4`;

  }
}
