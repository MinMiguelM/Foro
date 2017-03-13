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
    ) { }

    comments: Array<Object> = new Array();
    newcomment={usuario:"Felipe87",contenido:"Comentario viejo sobre pendejadas",puntos:30};
    ngOnInit(): void {
        this.comments.push(Object.assign({},this.newcomment));
    }
    
    goBack(): void{
        this.location.back();
    }
    users:Array<string> = ['USarios13','usuari34','kjd3'];
    //comments:Array<string> = ['Comentario viejo sobre pendejadas','Comentario viejo sobre pendejadas','Comentario viejo sobre pendejadas'];
   
   // cuando se usa this, el objeto debe ser llamado desde una función
   // si quiere que sea al cargar el componente, ponerlo en el ngOnInit
    
    test(){
        console.log(this.comments[0].usuario);
        console.log(this.comments[0].contenido);
        console.log(this.comments[0].puntos);
    }
    
}