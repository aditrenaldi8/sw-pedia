import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-peeple',
  templateUrl: './peeple.component.html',
  styleUrls: ['./peeple.component.css']
})
export class PeepleComponent implements OnInit {

  length: number = 0;
  pageSize:number = 10;
  pageSizeOptions: number[] = [10];
  data: any;
  next: string;
  previous: string;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.getDataList()
  }

  getDataList(){
    this.appService.changeCloak(false);
    this.appService.getPeople().subscribe(response =>{
      this.appService.changeCloak(true);
      this.length = response.count;
      this.data = response.results;
      this.next = response.next;
      this.previous = response.previous;
      console.log(response)
    },(error)=>{
      this.appService.changeCloak(true);
      console.log(error);
    })
  }

  pageChangeEvent(event : PageEvent){
    if(event.pageIndex > event.previousPageIndex){
      this.getData(this.next);
    }else{
      this.getData(this.previous);
    }
    
  }

  getData(url: string){
    this.appService.changeCloak(false);
    this.appService.getData(url).subscribe(response =>{
      this.appService.changeCloak(true);
      this.length = response.count;
      this.data = response.results;
      this.next = response.next;
      this.previous = response.previous;
      console.log(response)
    },(error)=>{
      this.appService.changeCloak(true);
      console.log(error);
    })
  }

}
