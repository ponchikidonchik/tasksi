function encode(str){
    text = str.replace(/(\S)(\S+)/g, '$2$1my');
  return text;
}

console.log(encode("there is the house where my family lives" ))