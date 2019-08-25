import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {

  pageTitle = "Welcome to databinding";

  imgURL = "assets/images/about/about-1.png";

  students = ["pankaj","deepak","hemant"];

  teachers = [
                {name:'pankaj', age:'33',add:'delhi'},
                {name:'arvind', age:'23',add:'noida'},
                {name:'pradeep', age:'53',add:'ghazaiabd'},
                {name:'amit', age:'43',add:'faridabad'},
                {name:'shivraj', age:'73',add:'gurugram'},
  ];

  isLogin:boolean=false;
  changeContent() {
    this.pageTitle = "Changed Page Title";
  }
  constructor() {


   }

  ngOnInit() {


  }

}
