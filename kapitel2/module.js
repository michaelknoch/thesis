// data.service.js
export function getData(id) {
  // ...
}

export function setData(data) {
  // ...
}

// data.consumer.js
import { getData, setData } from './data.service';
let data = getData(0);
