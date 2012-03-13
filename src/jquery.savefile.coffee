# Make dollar-sign jQuery available inside our clojure
# http://stackoverflow.com/a/4534417
$ = jQuery

$.fn.savefile = (options) ->
  settings = $.extend(
    filename: 'file'
    extension: 'txt'
    content: 'Hello world'
  ,options)

  buildURL = (filename, content) ->
    url = "http://savefile.joshmcarthur.com/#{encodeURIComponent(filename)}"
    url += encodeURIComponent(content) if content

  buildFilename =
    "#{settings.filename}.#{settings.extension}"

  buildForm = (content) ->
    $('<form></form>',
      action: buildURL(buildFilename())
      method: 'POST'
    ).append(
      $('<input></input>',
        type: 'hidden',
        name: 'content',
        value: content
      )
    )

  this.each ->
    content = if this.val() != "" then this.val() else this.text()
    content = settings.content if settings.content?
    buildForm(content).submit()

