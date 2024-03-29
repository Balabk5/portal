import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
@Component({
  selector: 'app-inquirydata',
  templateUrl: './inquirydata.component.html',
  styleUrls: ['./inquirydata.component.css']
})
export class InquirydataComponent implements OnInit {

  inquiry:any;
uname:any;

constructor(public authenticationService: AuthenticationService,private router:Router,private http:HttpClient) {​​​​​ }​​​​​
logout() {​​​​​
this.authenticationService.logout();
// sessionStorage.clear();
  }​​​​​
  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/inquiry',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.inquiry= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_CUST_INQUIRYLIST_FM.Response']['IT_INQUIRY_LIST']['item'];
    console.log(this.inquiry);
  })
  }

}
