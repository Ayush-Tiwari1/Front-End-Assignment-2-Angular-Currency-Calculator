import { Component } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCurrencyCalculator';
  currjson: any=[];
  base='USD';
  cont2='USD';
  result:string='1';
  changebase(a:string){
    this.base=a;
  }
  tocountry(a:string){
    this.cont2=a;
  }
  constructor(private currency:CurrencyapidataService){}
  convert(){
    this.currency.getcurrencydata(this.base).subscribe(data=>{
      this.currjson=JSON.stringify(data);
      // console.log(this.currjson);
      this.currjson=JSON.parse(this.currjson)
      // console.log(this.currjson);
      if(this.cont2=='USD')
      {
        this.result=this.currjson.rates.USD;
      }
      if(this.cont2=='INR')
      {
        this.result=this.currjson.rates.INR;
      }
      if(this.cont2=='EUR')
      {
        this.result=this.currjson.rates.EUR;
      }
      if(this.cont2=='JPY')
      {
        this.result=this.currjson.rates.JPY;
      }
      if(this.cont2=='CHF')
      {
        this.result=this.currjson.rates.CHF;
      }
    })
  }
}
