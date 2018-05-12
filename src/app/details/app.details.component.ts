import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'


@Component({
  selector: 'details-root',
  templateUrl: '../details/app.details.component.html'
})

export class DetailsComponent {
  constructor(private router: Router) {
  }
  onSubmit(f: NgForm) {
    console.log(f.valid);
    if (f.valid == true) {
      console.log(f.value)
      let data = "dynamic";
      let name = f.value.name
      let lastname = f.value.lastname
      localStorage.setItem("dynamic", data)
      localStorage.setItem("test", name)
      localStorage.setItem("lastname", lastname)
      this.router.navigate(['templates']);
    }
  }
}