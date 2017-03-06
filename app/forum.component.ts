import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'forum',
    templateUrl: 'html/forum.component.html',
    styleUrls:['style/forum.component.css']
})
export class ForumComponent implements OnInit{
    //forum

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        // get topics of a forum with id {id} at params of route
    }
}