// the core code to run the demo
(function() {
  var error = 'The client is NOT ready!'
  var globalClient; // for caching
  jsonqlClient()
    .then(function(client) {
      globalClient = client;
      client.query.helloWorld()
        .then(function(msg) {
          var s= document.getElementById('hello')
          setTimeout(function() {
            s.innerHTML = msg
            s.className = 'has-text-success'
          }, 2000)
        })
    })

  window.getSomething = function() {
    if (globalClient) {
      globalClient.query.getSomething()
        .then(function(result) {
          var r1 = document.getElementById('result1')
          r1.innerHTML = result;
          r1.className = 'has-text-link'
        })
    } else {
      alert(error)
    }
  }

  window.saveSomething = function() {
    if (globalClient) {
      var payload = document.getElementById('payload').value
      var condition = parseInt(document.getElementById('condition').value)

      globalClient.mutation.saveSomething(payload, condition)
        .then(function(result) {
          var r2 = document.getElementById('result2')
          r2.innerHTML = result
          r2.className = 'has-text-link'
        })
        .catch(function(err) {
          console.error(err)
        })
    } else {
      alert(error)
    }
  }


})()
