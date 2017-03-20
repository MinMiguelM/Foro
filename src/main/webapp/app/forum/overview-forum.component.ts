import { Component,Input } from '@angular/core';
import { Forum } from '../model/forum.model';
import { SharedService } from '../service/shared.service';

@Component({
  moduleId: module.id,
  selector: 'overview-forum',
  templateUrl: '../html/overview-forum.component.html',
  styleUrls:['../style/overview-forum.component.css']
})
export class OverviewForumComponent{
    forum:Forum;

    constructor(
        private shared: SharedService
    ){ 
        this.forum = JSON.parse(localStorage.getItem('CUR_FORUM'));
     }
}