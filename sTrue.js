sTrue = (function() {

  function STRUE () { }

  function foo() {
    log("FOO");
  }

  var sTrue = {
    suite: function (msg, t) {
      log(msg);
      t.call()
    },
    true: function (i, msg) {
      foo();
      var tmsg = "Fail!";
      if (i) { tmsg = "Passed!"; }
      if (!msg) { msg = "Should be true"; }
      log("  {"+i+"}" + " \""+ msg + "\" : " + tmsg);
    },
    false: function (i, msg) {
      var tmsg = "Fail!";
      if (!i) { tmsg = "Passed!"; }
      if (!msg) { msg = "Should be false"; }
      log("  {"+i+"}" + " \""+ msg + "\" : " + tmsg);
    },
    equal: function (a, b, msg) {
      var tmsg = "Fail!";
      var ig = a === b;
      if (ig) { tmsg = "Passed!"; }
      if (!msg) { msg = "Should be equal"; }
      log("  {"+ ig +"}" + " \""+ msg + "\" : " + tmsg);
      return ;
    },
    notequal: function (a, b, msg) {
      var tmsg = "Fail!";
      var ig = a === b;
      if (!ig) { tmsg = "Passed!"; }
      if (!msg) { msg = "Should be not equal"; }
      log("  {"+ ig +"}" + " "+ msg + " : " + tmsg);
      return ;
    },
    class: function (a, b, msg) {
      var tmsg = "Fail!";
      var ig = a.class() == b;
      if (ig) { tmsg = "Passed!"; }
      if (!msg) { msg = "Should be same type"; }
      log("  {"+ ig +"}" + " \""+ msg + "\" : " + tmsg);
      return ;
    },
    typeof: function (a, b, msg) {
      var tmsg = "Fail!";
      var ig = typeof(a) === b;
      if (ig) { tmsg = "Passed!"; }
      if (!msg) { msg = "Should be same type"; }
      log("  {"+ ig +"}" + " \""+ msg + "\" : " + tmsg);
      return ;
    }
  };

  return sTrue;

}());
