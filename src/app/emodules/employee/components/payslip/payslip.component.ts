import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {
  uname:any;
  payslip:any;
  msg: string = "no data";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("uname");
    this.http.post('http://localhost:4000/payslip',{uname:this.uname}).subscribe((data:any)=>{
      console.log(data);
    this.payslip= data['SOAP:Envelope']['SOAP:Body']['ns0:ZFM_EP_PAYSLIP_537.Response']['IT_PAYSLIP']['item'];
    console.log(this.payslip);

  })
}




}
