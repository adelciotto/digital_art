var Church = require('./church')

var CANVAS_ID = 'mainCanvas'

var canvas = document.getElementById(CANVAS_ID)
var ctx = canvas.getContext('2d')
var canvasWidth = canvas.width
var canvasHeight = canvas.height

function draw () {
  //var churchA = new Church({
    //startX: 100,
    //startY: canvasHeight + 50,
    //width: 100,
    //height: canvasHeight,
    //useRandomHeights: false
  //})
  var churchB = new Church({
    startX: canvasWidth / 2 - 60,
    startY: canvasHeight + 50,
    width: 120,
    height: canvasHeight - 10
    //useRandomHeights: false
  })
  var churchC = new Church({
    startX: 15,
    startY: canvasHeight + 50,
    width: 80,
    height: canvasHeight - 50,
    leanDirection: -1
  })

  //churchA.draw(ctx)
  churchC.draw(ctx)
  churchB.draw(ctx)
}

draw()
