{print} = require 'util'
{spawn, exec} = require 'child_process'

build = (callback) ->
  # Compile Coffeescript into this directory, from the src/ directory
  options = ['-c', '-o', '.', 'src']
  coffee = spawn 'coffee', options
  coffee.stdout.on 'data', (data) -> print data.toString()
  coffee.stderr.on 'data', (data) -> print data.toString()
  coffee.on 'exit', (status) -> callback?() if status is 0

minify = ->
  options = ['-o', 'jquery.savefile.min.js', 'jquery.savefile.js']
  uglify = spawn './node_modules/uglify-js/bin/uglifyjs', options
  uglify.stdout.on 'data', (data) -> print data.toString()
  uglify.stderr.on 'data', (data) -> print data.toString()

task 'build', 'Build minified and standard versions of jquery.savefile', ->
  build -> minify()
