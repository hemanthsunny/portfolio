import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  @Input()
  saveBtnName = "Save";
  
  @Input()
  title = "My Modal";

  @Output("save")
  onSave = new EventEmitter();

  @Output("close")
  onClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  save(event){
    this.onSave.emit(event);
  }

  close(){
  	this.onClose.emit();
  }
}
