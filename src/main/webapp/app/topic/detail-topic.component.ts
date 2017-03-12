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
    //comentario={usuario:"",contenido:"",puntos:0};
    ngOnInit(): void {
        
    }
    
    goBack(): void{
        this.location.back();
    }
    users:Array<string> = ['USarios13','usuari34','kjd3'];
    comments:Array<string> = ['Comentario viejo sobre pendejadas','Comentario viejo sobre pendejadas','Comentario viejo sobre pendejadas'];
   
   // comments=[];
   // newcomment={usuario:"Felipe87",contenido:"Comentario viejo sobre pendejadas",puntos:30};
   // this.comments.push(Object.assign({},this.necomment));
    
    
}