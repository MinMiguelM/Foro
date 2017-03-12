import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'detail-topic',
    templateUrl: '../html/detail-topic.component.html',
    styleUrls:['../style/detail-topic.component.css']
})
export class DetailTopicComponent implements OnInit{
    
    constructor(
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        
    }
    
    goBack(): void{
        this.location.back();
    }

}