const sendmail = require('sendmail')();
const request = require('superagent');
 
setInterval( () => {
  var e = undefined
  var r = undefined
  request.
    get('https://dentas.i-terative.com').
    end((err, res) => {
      e = err
      r = res
      if (typeof(e) !== undefined && e !== null) {
        var error_msg = `error in https://dentas.i-terative.com: ${e}`
        console.log(error_msg)
        sendmail({
            from: 'no-reply@i-terative.com',
            to: 'mert.nuhoglu@gmail.com',
            subject: error_msg,
            html: 'dentas doesnt work',
          }, function(err, reply) {
            console.log(err && err.stack);
            console.dir(reply);
        });
      } else {
        console.log(r.status)
      }
    })
}, 3000)



