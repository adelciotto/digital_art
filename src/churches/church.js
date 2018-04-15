var util = require('common').util

var LINE_WIDTH = 2
var LEAN_MIN = 10
var LEAN_MAX = 40

function Church (props) {
  props = props || {}

  this.startX = props.startX
  this.startY = props.startY
  this.width = props.width
  this.height = props.height
  this.useRandomHeights = typeof props.useRandomHeights === 'undefined' ? true : props.useRandomHeights
  this.numLines = this.width / LINE_WIDTH

  var leanDirection = props.leanDirection || 1

  this.leanFactor = util.getRandomNumberInRange(LEAN_MIN, LEAN_MAX) * leanDirection
}

Church.prototype = {
  draw: function (ctx) {
    var currentX = this.startX
    var centerIndex = this.numLines / 2

    for (var i = 0; i < this.numLines; i++) {
      var isCenterIndex = i === centerIndex
      var distanceFromCenter = Math.abs(centerIndex - i)
      var height = isCenterIndex ? this.height : this.getHeight(distanceFromCenter)
      var x0 = currentX
      var y0 = this.startY
      var x1 = x0 + this.leanFactor
      var y1 = ctx.canvas.height - height

      this.drawLine(ctx, x0, y0, x1, y1)

      if (isCenterIndex && this.useRandomHeights) {
        this.drawCross(ctx, x1, y1)
      }

      currentX += LINE_WIDTH
    }
  },

  drawLine: function (ctx, x0, y0, x1, y1) {
    ctx.beginPath()
    ctx.moveTo(x0, y0)
    ctx.lineWidth = LINE_WIDTH
    ctx.lineTo(x1, y1)
    ctx.strokeStyle = this.getLineGradient(ctx, x0, y0, x1, y1)
    ctx.stroke()
    ctx.closePath()
  },

  drawCross: function (ctx, x, y) {
    var width = util.getRandomNumberInRange(25, 30) / 2

    ctx.beginPath()
    ctx.moveTo(x - width, y + 5)
    ctx.lineWidth = LINE_WIDTH
    ctx.lineTo(x + width, y + 5)
    ctx.stroke()
    ctx.closePath()
  },

  getLineGradient: function (ctx, x0, y0, x1, y1) {
    var gradient = ctx.createLinearGradient(x0, y0, x1, y1)

    gradient.addColorStop(0, 'black')
    gradient.addColorStop(0.25, '#0e1111')
    gradient.addColorStop(0.5, '#232b2b')
    gradient.addColorStop(0.75, '#353839')
    gradient.addColorStop(1, '#CCC')

    return gradient
  },

  getHeight: function (distanceFromCenter) {
    if (this.useRandomHeights) {
      return this.height - (distanceFromCenter + Math.random() * 30)
    }

    return this.height - distanceFromCenter
  }
}

module.exports = Church
