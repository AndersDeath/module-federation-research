import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'module-federation-research-mfe1-hello',
  templateUrl: './mfe1-hello.component.html',
  styleUrls: ['./mfe1-hello.component.scss'],
})
export class Mfe1HelloComponent implements OnInit {
  ngOnInit(): void {
    console.log('this is mf1')
  }
}
