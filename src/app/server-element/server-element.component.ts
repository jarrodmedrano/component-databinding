import {
  Component,
  OnInit,
  Input,
  DoCheck
}
  from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked, OnDestroy {
 @Input('srvElement') element: {type: string, name: string, content: string};
 @Input() name: string;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOninit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    //only called once
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
    //after each change detection cycle
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    //only called once
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
    //after each change detection cycle
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
