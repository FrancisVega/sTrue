sTrue = (function() {

  function STRUE () { }

  /**
   * A custom test message
   * @name resultMsg
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

  /*
   * Constructor
   */
  var sTrue = {
    suite: function (msg, t) {
      log(msg);
      t.call()
    },

    /**
     * Pass the test if 'e' is true
     * @name true
     * @return {boolean}
     * @example
     * test(1 == 1, "That should be true")
     */
    true: function (e, msg) {
      var result = "Fail!";
      if (e) { result = "Passed!"; }
      if (!msg) { msg = "Should be true"; }
      resultMsg(e, msg, result);

      return e
    },

    /**
     * Pass the test if 'e' is false
     * @name false
     * @return {boolean}
     * @example
     * test(0 == 1, "That should be false")
     */
    false: function (e, msg) {
      var result = "Fail!";
      if (!e) { result = "Passed!"; }
      if (!msg) { msg = "Should be false"; }
      resultMsg(e, msg, result);

      return e
    },

    /**
     * Pass the test if 'a' is equal to 'b'
     * @name false
     * @return {boolean}
     */
    equal: function (a, b, msg) {
      var result = "Fail!";
      var e = a === b;
      if (e) { result = "Passed!"; }
      if (!msg) { msg = "Should be equal"; }
      resultMsg(e, msg, result);

      return e;
    },

    /**
     * Pass the test if 'a' is not equal to 'b'
     * @name false
     * @return {boolean}
     */
    notequal: function (a, b, msg) {
      var result = "Fail!";
      var e = a === b;
      if (!e) { result = "Passed!"; }
      if (!msg) { msg = "Should be not equal"; }
      resultMsg(e, msg, result);

      return e;
    },

    /**
     * Pass the test if the class of 'a' is equal to 'b'
     * @name false
     * @return {boolean}
     */
    class: function (a, b, msg) {
      var result = "Fail!";
      var e = a.class() == b;
      if (e) { result = "Passed!"; }
      if (!msg) { msg = "Should be class: " + b; }
      resultMsg(e, msg, result);

      return e;
    },

    /**
     * Pass the test if the type of 'a' is equal to 'b'
     * @name false
     * @return {boolean}
     */
    typeof: function (a, b, msg) {
      var result = "Fail!";
      var e = typeof(a) === b;
      if (e) { result = "Passed!"; }
      if (!msg) { msg = "Should be typeof: " + b; }
      resultMsg(e, msg, result);

      return e;
    }

  };

  return sTrue;

}());
