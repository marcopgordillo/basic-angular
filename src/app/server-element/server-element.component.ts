import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

//import {ServerModel} from "../server.model";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  /*@Input('srvElement')
  private element: ServerModel;*/
  @Input()
  private name:string;

  constructor() {
    console.log('Constructor called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('onDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('onAfterContentInit called!')
  }

  ngAfterContentChecked(): void {
    console.log('onAfterContentChecked called!')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }

}
