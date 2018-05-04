import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat-empresa',
  templateUrl: './cat-empresa.component.html',
  styleUrls: ['./cat-empresa.component.css']
})
export class CatEmpresaComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  CatEmpresa(){
          this.router.navigate(['/SubEmp']);
  }

}
