import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sub-empresa',
  templateUrl: './sub-empresa.component.html',
  styleUrls: ['./sub-empresa.component.css']
})
export class SubEmpresaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Empresa(){
          this.router.navigate(['/Emp']);
  }

}
