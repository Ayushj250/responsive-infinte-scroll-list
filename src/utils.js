 export function toStringJson(data){
     return Object.keys(data).reduce((result, key) => result + " " + data[key],"").trim();
 }