import { EventEmitter } from '@angular/core';

let events = new EventEmitter;

export const RefreshService = {
  emit: (refreshType)=>{      
    events.emit(refreshType)
  },

  subscribe: (cb)=>{
    events.subscribe(cb)
  }
}