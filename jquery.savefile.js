(function() {
  var $;

  $ = jQuery;

  $.fn.savefile = function(options) {
    var buildFilename, buildForm, buildURL, settings;
    settings = $.extend({
      filename: 'file',
      extension: 'txt'
    }, options);
    buildURL = function(filename, content) {
      var url;
      url = "http://savefile.joshmcarthur.com/" + (encodeURIComponent(filename));
      if (content) return url += encodeURIComponent(content);
    };
    buildFilename = "" + settings.filename + "." + settings.extension;
    buildForm = function(content) {
      return $('<form></form>', {
        action: buildURL(buildFilename()),
        method: 'POST'
      }).append($('<input></input>', {
        type: 'hidden',
        name: 'content',
        value: content
      }));
    };
    return this.each(function() {
      var content;
      content = this.val() !== "" ? this.val() : this.text();
      if (settings.content != null) content = settings.content;
      return buildForm(content).submit();
    });
  };

}).call(this);
