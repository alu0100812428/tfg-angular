import { Injectable } from '@angular/core';
import { EjecucionComponent } from './ejecucion/ejecucion.component';
import { Router } from '@angular/router';
import { ResumenListaEjecucionesComponent } from './resumen-lista-ejecuciones/resumen-lista-ejecuciones.component';

@Injectable()
export class EjecucionesService {
   constructor(private router: Router) {}
  
  //      id_resumen  id_algoritmo  titulo
  resumen_ejecucion: ResumenListaEjecucionesComponent[] = [
    new ResumenListaEjecucionesComponent(0,0,'pruebas'),
    new ResumenListaEjecucionesComponent(1,1,'pruebas2'),
    new ResumenListaEjecucionesComponent(2,2,'pruebas3'),
    new ResumenListaEjecucionesComponent(3,3,'pruebas4')
  ];
  //        id_ejecucion  id_resumen
  ejecuciones: EjecucionComponent[] = [
    new EjecucionComponent(0,0,true,false),
    new EjecucionComponent(1,1,true,false),
    new EjecucionComponent(2,2,true,false),
    new EjecucionComponent(3,2,false,false),
    new EjecucionComponent(4,3,false,false),
    new EjecucionComponent(5,3,true,false),
    new EjecucionComponent(6,3,false,true)
  ];
  
  id_resumen_actual:number = 0;
  ultimo_id_resumen: number = 3;
  ultimo_id_ejecucion: number = 3;
  
  ejecuciones_actuales: EjecucionComponent[] = [];
  
  
  get_n_ejecuciones(id_resumen: number){
    var n :number = 0;
    this.ejecuciones.forEach((item,index)=>{
      if(item.id_resumen==id_resumen)
        n=n+1;
    }
    )
    return n;
  }

  get_ejecuciones(id_resumen: number){
    this.id_resumen_actual = id_resumen;
    this.ejecuciones_actuales = [];
    this.ejecuciones.forEach((item,index)=>{
      if(item.id_resumen==id_resumen){
        this.ejecuciones_actuales.push(new EjecucionComponent(item.id_ejecucion,item.id_resumen,item.ejecutando,item.completado));
      }
    }
    )
    
  }
  
  get_titulo_resumen(id_resumen:number){
    var titulo:string;
    this.resumen_ejecucion.forEach((item,index)=>{
      if(item.id_resumen==id_resumen){
        titulo = item.titulo;
      }
    }
    )
    return titulo;
  }
  
  nuevo_resumen_ejecucion(id_algoritmo:number, titulo:string, n_tareas: number){
    console.log(this.ultimo_id_resumen);
    this.ultimo_id_resumen++;
    console.log(this.ultimo_id_resumen);
    this.resumen_ejecucion.push(new ResumenListaEjecucionesComponent(this.ultimo_id_resumen,id_algoritmo,titulo));
    var n=0;
    while(n<n_tareas){
      this.ultimo_id_ejecucion++;
      this.ejecuciones.push(new EjecucionComponent(this.ultimo_id_ejecucion,this.ultimo_id_resumen,true,false));
      n++;
    }
    console.log(this.ejecuciones);
  }
  
  eliminar_ejecucion(id_ejecucion:number,id_resumen:number){
    this.ejecuciones_actuales.forEach((item,index)=>{
      if(item.id_ejecucion==id_ejecucion){
        this.ejecuciones_actuales.splice(index, 1);
      }
    }
    )

    this.ejecuciones.forEach((item,index)=>{
      if(item.id_ejecucion==id_ejecucion){
        this.ejecuciones.splice(index, 1);
        if(this.get_n_ejecuciones(id_resumen)==0){
          this.eliminar_resumen(id_resumen);
          this.router.navigate(['/ejecuciones']);
        }
      }
    }
    )
  }
  
  eliminar_resumen(id_resumen:number){
    this.resumen_ejecucion.forEach((item,index)=>{
      if(item.id_resumen==id_resumen){
        if(this.get_n_ejecuciones(id_resumen)!=0){
          this.ejecuciones.forEach((item2,index2)=>{
            if(item2.id_resumen==id_resumen){
              this.ejecuciones.splice(index2, 1);
            } 
          }
          )
        }
        this.resumen_ejecucion.splice(index,1);
      }
    }
    )
  }
  
  cambiar_estado(id_ejecucion:number){
    this.ejecuciones_actuales.forEach((item,index)=>{
      if(item.id_ejecucion==id_ejecucion){
        if(item.ejecutando==false)
          item.ejecutando=true;
        else
          item.ejecutando=false;
      }
    }
    )
    
    this.ejecuciones.forEach((item,index)=>{
      if(item.id_ejecucion==id_ejecucion){
        if(item.ejecutando==false)
          item.ejecutando=true;
        else
          item.ejecutando=false;
      }
    }
    )
  }
 
  get_ejecuciones_ejecutando(id_resumen:number){
    var n :number = 0;
    this.ejecuciones.forEach((item,index)=>{
      if((item.id_resumen==id_resumen)&&(item.ejecutando))
        n=n+1;
    }
    )
    return n;
  }
  
  get_ejecuciones_pausa(id_resumen:number){
    var n :number = 0;
    this.ejecuciones.forEach((item,index)=>{
      if((item.id_resumen==id_resumen)&&(!item.ejecutando))
        n=n+1;
    }
    )
    return n;
  }
  
  get_ejecuciones_completadas(id_resumen:number){
    var n :number = 0;
    this.ejecuciones.forEach((item,index)=>{
      if((item.id_resumen==id_resumen)&&(item.completado))
        n=n+1;
    }
    )
    return n;
  }

}