var console = {
    log: function (input, depth) {
        if(typeof input === "object"){
          var p = document.createElement("p");
          p.className = "console-line";
          p.innerHTML = this.printObject(input, depth === undefined? undefined: depth);
          document.querySelector("#console-log").appendChild(p);
        }else if(typeof input === "function"){
          var p = document.createElement("p");
          p.className = "console-line";
          p.innerHTML = input.toString();
          document.querySelector("#console-log").appendChild(p);
        }else if(typeof input === "undefined"){
          var p = document.createElement("p");
          p.className = "console-line";
          p.innerHTML = "undefined";
          document.querySelector("#console-log").appendChild(p);
        }else{
          var p = document.createElement("p");
          p.className = "console-line";
          p.innerHTML = input;
          document.querySelector("#console-log").appendChild(p);
        }
    },
    printObject: function(obj, depth, lvl){
      depth = depth === undefined? -2:depth;
      lvl = lvl === undefined? 0: lvl;
      var str = '';
      if(depth === -1) return '';
      if(lvl === 0){
        str += obj.constructor.name;
      }
      var count = 0;
      for(var key in obj){
        for(var i = 0 ; i < lvl ; i++){
          str += '  ';
        }
        if(typeof obj[key] === "object"){
          if(key === '__proto__' && key === 'prototype'){
            str += key + ': ' + obj[key].constructor.name + "\n";
            str += depth !== 0 && obj[key].constructor.name !== "Object" ?
                   printObject(obj[key], depth-1, lvl+1):
                   '';
          }else{
            str += key + ': ' + Object + "\n";
            str += depth !== 0 ? printObject(obj[key], depth-1, lvl+1): '';
          }

        }else if(typeof obj[key] === "function" && obj[key] !== null){
          var tostr = obj[key].toString();
          str += key + ': ' + "<em>"+tostr.substring(0, tostr.indexOf('{')-1)+"</em>\n";
        }else if(typeof obj[key] === "undefined"){
          str += key + ': undefined';
        }else{
          str += key + ': ' + obj[key];
        }
        count++;
      }
      if(count === 0){
        str += ': {}';
      }
      return;
    }
};
