import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/i-usuario';

import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-buscar-user',
  templateUrl: './buscar-user.component.html',
  styleUrls: ['./buscar-user.component.css']
})
export class BuscarUserComponent implements OnInit {

  user:any;
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) => {
      const {params} = paramMap
      this.cargarData(params.nombreUsuario);
    } )
  }

  cargarData(nombreUsuario:string){
    this.user = [];
    this.apiService.getUser(nombreUsuario).subscribe(response => {
      this.user = response;
    });
  }


}
