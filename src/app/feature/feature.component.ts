import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  datas
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.http.get("http://www.mocky.io/v2/5b52f5322f0000fb0a3bb672").subscribe((data:any)=>{
      // this.datas =  data
      console.log(data);
    })
  }

}
