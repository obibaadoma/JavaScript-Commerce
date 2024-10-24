const {readFileSync, writeFileSync} = require('fs');
writeFileSync('./content/firstfile.txt', 'utf8', (err, result)=>{
  if (err) {
    console.log(err);
    return
  }
  else{
    console.log(result);
    readFile('./content/secondfile.txt', 'utf8', (err, result)=>{
      if (err) {
        console.log(err);
        return
      }
      else{
        console.log(result);
      }
    })
  }
})


