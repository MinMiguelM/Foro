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
    newcomment1={usuario:"Felipe87",contenido:"Comentario viejo sobre pendejadas 1",puntos:30,mostrar:false};
    newcomment2={usuario:"USarios13",contenido:"Comentario viejo sobre pendejadas 2",puntos:40,mostrar:false};
    newcomment3={usuario:"USarios13",contenido:"Comentario viejo sobre pendejadas 3",puntos:78,mostrar:false};
    newcomment4={usuario:"kjd3",contenido:"Comentario viejo sobre pendejadas 4",puntos:20,mostrar:false};
    newcomment5={usuario:"MM95",contenido:"Comentario viejo sobre pendejadas 5",puntos:76,mostrar:false};
    ngOnInit(): void {
        this.comments.push(Object.assign({},this.newcomment1));
        this.comments.push(Object.assign({},this.newcomment2));
        this.comments.push(Object.assign({},this.newcomment3));
        this.comments.push(Object.assign({},this.newcomment4));
        this.comments.push(Object.assign({},this.newcomment5));
    }
    
    goBack(): void{
        this.location.back();
    }
    
    showAll(nombre:string){
     for(var i=0; i<this.comments.length;i++)
        {
            if(nombre==this.comments[i].usuario)
            {
                console.log(this.comments[i].usuario);
               //return false;
               if(this.comments[i].mostrar==false)
                this.comments[i].mostrar = true;
               else
                this.comments[i].mostrar=false;
            }
        }
        /*console.log(this.comments[0].usuario);
        console.log(this.comments[0].contenido);
        console.log(this.comments[0].puntos);*/
    }
    
}