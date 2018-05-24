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
      console.log(f.value);
      let object = {};
      let data = "dynamic";
      let name = f.value.name;
       let lastname = f.value.lastname;
       let mobile = f.value.mobile;
       let email = f.value.email;
       let date = f.value.date;
       let profileSummary = f.value.summary;
      localStorage.setItem("dynamic", data);
      localStorage.setItem("name", name);
      localStorage.setItem("lastname", lastname);
      localStorage.setItem("mobile", mobile);
      localStorage.setItem("email", email);
      localStorage.setItem('date', date);
      localStorage.setItem('profile', profileSummary);
      this.router.navigate(['templates']);
    }
  }
}