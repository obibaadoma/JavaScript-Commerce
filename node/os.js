const os = require('os');

const user = os.userInfo()
console.log(user)

//method returns the system uptimein seconds

console.log(`The system UPtime is ${os.uptime} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem:os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)

