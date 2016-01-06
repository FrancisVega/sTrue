var sTrue;

(function() {

  var passed = "* OK *";
  var failed = "*** FAILED ***";

  sTrue = function(m, t) {
    return new STRUE(m, t);
  }

  var STRUE = function(m, t) {
    log("");
    log("  @test: \""+ m +"\"");
    t.call(this);
  }

  /**
   * A custom test message
   * @param {boolean} the result of test
   * @param {string} custom test message
   * @param {string} the restul of the test in string
   * @return {boolean}
   */
  function resultMsg(i, msg, result) {
    //log("  " + "{"+i+"}" + " " + msg + " " + result);
    log("  · " + "{"+result+"}" + " " + msg);
  }

  sTrue.fn = STRUE.prototype = {

    /**
     * Pass the test if 'e' is true
     * @return {boolean}
     */
    true: function (e, msg) {
      var result = failed;
      if (e) { result = passed; }
      if (!msg) { msg = "Should be true"; }
      resultMsg(e, msg, result);

      return e
    },

    /**
     * Pass the test if 'e' is false
     * @return {boolean}
     */
    false: function (e, msg) {
      var result = failed;
      if (!e) { result = passed; }
      if (!msg) { msg = "Should be false"; }
      resultMsg(e, msg, result);

      return e
    },

    /**
     * Pass the test if 'a' is equal to 'b'
     * @return {boolean}
     */
    equal: function (a, b, msg) {
      var result = failed;
      var e = a == b;
      if (e) { result = passed; }
      if (!msg) { msg = "Should be equal"; }
      resultMsg(e, msg, result);

      return e;
    },

    /**
     * Pass the test if 'a' is not equal to 'b'
     * @return {boolean}
     */
    notequal: function (a, b, msg) {
      var result = failed;
      var e = a == b;
      if (!e) { result = passed; }
      if (!msg) { msg = "Should be not equal"; }
      resultMsg(e, msg, result);

      return e;
    },

    /**
     * Pass the test if the class of 'a' is equal to 'b'
     * @return {boolean}
     */
    class: function (a, b, msg) {
      var result = failed;
      var e = a.class() == b;
      if (e) { result = passed; }
      if (!msg) { msg = "Should be " + b; }
      resultMsg(e, msg, result);

      return e;
    },

    /**
     * Pass the test if the type of 'a' is equal to 'b'
     * @return {boolean}
     */
    typeof: function (a, b, msg) {
      var result = failed;
      var e = typeof(a) === b;
      if (e) { result = passed; }
      if (!msg) { msg = "Should be typeof: " + b; }
      resultMsg(e, msg, result);

      return e;
    }

  };

}());
