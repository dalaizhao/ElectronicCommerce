/**
 * format
 *
 * formats the string to
 * arguments and returns
 * @returns {string}
 */
function format () {
  if (arguments.length === 0) return this;

  // setup args
  var iter;
  if (arguments.length > 1) { // string arguments
    iter = arguments;
  } else {
    iter = arguments[0];
  }

  // perform replace
  var ret = this;
  for (var i in iter) {
    ret = ret.replaceAll('{'+i+'}', iter[i]);
  }

  // done
  return ret;
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

// export
String.prototype.format = format;
