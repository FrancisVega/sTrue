sTrue = (function() {

  function STRUE () { }

  var sTrue = {
    suite: function (msg, t) {
      console.log(msg);
      t.call()
    },
    true: function (i, msg) {
      var tmgs = "Fail!";
      if (i) { tmsg = "Passed!"; }
      if (!msg) { msg = "Should be true"; }
      console.log("  {"+i+"}" + " \""+ msg + "\" : " + tmsg);
    },
    false: function (i, msg) {
      var tmsg = "Fail!";
      if (!i) { tmsg = "Passed!"; }
      if (!msg) { msg = "Should be false"; }
      console.log("  {"+i+"}" + " \""+ msg + "\" : " + tmsg);
    },
    equal: function (a, b, msg) {
      var tmsg = "Fail!";
      var ig = a === b;
      if (ig) { tmsg = "Passed!"; }
      if (!msg) { msg = "Should be equal"; }
      console.log("  {"+ ig +"}" + " \""+ msg + "\" : " + tmsg);
      return ;
    },
    notequal: function (a, b, msg) {
      var tmsg = "Fail!";
      var ig = a === b;
      if (!ig) { tmsg = "Passed!"; }
      if (!msg) { msg = "Should be not equal"; }
      console.log("  {"+ ig +"}" + " "+ msg + " : " + tmsg);
      return ;
    },
    typeof: function (a, b, msg) {
      var tmsg = "Fail!";
      var ig = typeof(a) === b;
      if (ig) { tmsg = "Passed!"; }
      if (!msg) { msg = "Should be same type"; }
      console.log("  {"+ ig +"}" + " \""+ msg + "\" : " + tmsg);
      return ;
    }
  };

  STRUE.prototype.foo = function() {
    console.log("Proto-foo");
  }

  return sTrue;

}());
