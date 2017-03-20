import { Component,Input } from '@angular/core';
import { Forum } from '../model/forum.model';

@Component({
  moduleId: module.id,
  selector: 'overview-forum',
  templateUrl: '../html/overview-forum.component.html',
  styleUrls:['../style/overview-forum.component.css']
})
export class OverviewForumComponent{
    forum:Forum;

    constructor(){ 
        this.forum = JSON.parse(localStorage.getItem('CUR_FORUM'));
     }
}