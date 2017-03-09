import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'detail-topic',
    templateUrl: '../html/detail-topic.component.html',
    styleUrls:['../style/detail-topic.component.css']
})
export class DetailTopicComponent implements OnInit{
    

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        
    }
BackForos(): void{
        
        this.router.navigate(['/forums']);
    }
    

}