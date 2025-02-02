const fs = require('fs');
fs.appendFile('deep.txt','me to accha hu',function(err){
    if(err) console.log(err);
    else console.log('File appended successfully');
})