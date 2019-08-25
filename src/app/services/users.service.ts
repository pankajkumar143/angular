import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getDetails(){
    [
      {name:'pankaj', mobile:7838223321,class:"MSc"},
      {name:'dEEPAK', mobile:5838223321,class:"BA"},
      {name:'ARVIND', mobile:77838223321,class:"Btech"},
      {name:'PRADEEP', mobile:8838223321,class:"MCA"}
    ]
  }
}
