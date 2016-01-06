var sTrue;

(function() {

  sTrue = function(m, t) {
    return new STRUE(m, t);
  }

  var STRUE = function(m, t) {
    log(m)
    t.call(this);
  }

  /**
   * A custom test message
   * @param {boolean} the result of test
   * @param {string} custom test message
   * @param {string} the restul of the test in string
   * @return {boolean}
   * @example
   * test(1 == 1, "That should be true")
   */
  function resultMsg(i, msg, result) {
    log("··· " + "{"+i+"}" + " " + msg + " " + result)
  }

  sTrue.fn = STRUE.prototype = {

    /**
     * Pass the test if 'e' is true
     * @return {boolean}
     */
    true: function (e, msg) {
      var result = "*** FAILED ***";
      if (e) { result = "Passed!"; }
      if (!msg) { msg = "Should be true"; }
      resultMsg(e, msg, result);

      return e
    },

    /**
     * Pass the test if 'e' is false
     * @return {boolean}
     */
    false: function (e, msg) {
      var result = "*** FAILED ***";
      if (!e) { result = "Passed!"; }
      if (!msg) { msg = "Should be false"; }
      resultMsg(e, msg, result);

      return e
    },

    /**
     * Pass the test if 'a' is equal to 'b'
     * @return {boolean}
     */
    equal: function (a, b, msg) {
      var result = "*** FAILED ***";
      var e = a == b;
      if (e) { result = "Passed!"; }
      if (!msg) { msg = "Should be equal"; }
      resultMsg(e, msg, result);

      return e;
    },

    /**
     * Pass the test if 'a' is not equal to 'b'
     * @return {boolean}
     */
    notequal: function (a, b, msg) {
      var result = "*** FAILED ***";
      var e = a == b;
      if (!e) { result = "Passed!"; }
      if (!msg) { msg = "Should be not equal"; }
      resultMsg(e, msg, result);

      return e;
    },

    /**
     * Pass the test if the class of 'a' is equal to 'b'
     * @return {boolean}
     */
    class: function (a, b, msg) {
      var result = "*** FAILED ***";
      var e = a.class() == b;
      if (e) { result = "Passed!"; }
      if (!msg) { msg = "Should be class: " + b; }
      resultMsg(e, msg, result);

      return e;
    },

    /**
     * Pass the test if the type of 'a' is equal to 'b'
     * @return {boolean}
     */
    typeof: function (a, b, msg) {
      var result = "*** FAILED ***";
      var e = typeof(a) === b;
      if (e) { result = "Passed!"; }
      if (!msg) { msg = "Should be typeof: " + b; }
      resultMsg(e, msg, result);

      return e;
    }

  };

}());
