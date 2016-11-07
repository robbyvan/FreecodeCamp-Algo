function booWho(bool){
  console.log(typeof bool);
  console.log(typeof bool === 'boolean');
  if(typeof bool === 'boolean'){
    return true;
  }else {
    return false;
  }
}

booWho("a");