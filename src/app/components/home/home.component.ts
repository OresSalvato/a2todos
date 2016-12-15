import { Component, OnInit } from '@angular/core';
// data object
import { PictureItem } from '../../data/picture';
// services
import { PictureService } from '../../services/picture.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pictureList:Array<PictureItem> = this._pictureService.getList(); ;
  picture:PictureItem;
  constructor(private _pictureService: PictureService) { }

  ngOnInit() {
  }

}
