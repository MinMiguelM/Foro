import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'topic',
    templateUrl: 'html/topic.component.html',
    styleUrls:['style/topic.component.css']
})
export class TopicComponent implements OnInit{
    

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        
    }

    

}