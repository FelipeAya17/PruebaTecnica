import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/interfaces/i-usuario';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  userForm;
  searchUser: string = '';
  lista_usuarios: IUsuario[] = [];
  followers: any;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.userForm = this.formBuilder.group({
      searchUser : ['', [Validators.required]]
    });
   }

  ngOnInit():any {
  }


  buscarUsuario(){
    if(this.searchUser.length >= 4){
      if(this.searchUser == "doublevpartners"){
        alert("Este usuario esta restringido")
      }else{
        this.lista_usuarios = [];
        this.apiService.getUsuarios(this.searchUser).subscribe(response => {
          this.lista_usuarios = response.items
          this.graficas();
          });
      }
      }
  }

  // graficas(){
  //   this.followers = [this.lista_usuarios.map(item => {
  //     item.followers_url.length
  //   })
  // ];
  // console.log(this.followers)
  // }

  //Ya funciona medio medio
  graficas(){
     this.apiService.getFollowers(this.searchUser).subscribe(response => {
     this.followers = response.length; console.log(response.length);
     });
   }

  // graficas(){
  //   this.lista_usuarios.forEach( seg => {
  //     let {followers_url} = seg
  //     followers_url = followers_url.length;
  //     console.log(followers_url);
  //   } )
  // }

}
