import { FramedArtwork, util } from 'common'

import styles from './styles.css'

const WIDTH = 450
const HEIGHT = 600
const MOON_BLUR_LEVEL = 4
const BACKGROUND_BLUR_LEVEL = 3
const MIDDLEGROUND_BLUR_LEVEL = 2
const FOREGROUND_BLUR_LEVEL = 0
const MOON_RADIUS = 100

class Mountains extends FramedArtwork {
  constructor () {
    super({
      name: 'mountains',
      width: WIDTH,
      height: HEIGHT,
      canvasClassName: styles.canvas
    })
  }

  render () {
    this.ctx.filter = 'brightness(200%)'
    this.ctx.shadowBlur = 10
    this.ctx.shadowColor = 'white'
    this.renderStars()
    this.ctx.shadowBlur = 0
    this.setBlurFilter(MOON_BLUR_LEVEL)
    this.renderMoon()

    this.setBlurFilter(BACKGROUND_BLUR_LEVEL)
    this.renderMountains(this.height * 0.25, this.height * 0.4, 333, 5, '#000063')
    this.renderMountains(this.height * 0.3, this.height * 0.4, 300, 8, '#311b92')

    this.setBlurFilter(MIDDLEGROUND_BLUR_LEVEL)
    this.renderMountains(this.height * 0.5, this.height * 0.65, 250, 10, '#c79a00')

    this.setBlurFilter(FOREGROUND_BLUR_LEVEL)
    this.renderMountains(this.height * 0.6, this.height * 0.75, 200, 15, '#ffca28')
  }

  renderStars () {
    this.ctx.fillStyle = 'white'

    for (let i = 0; i < 30; i++) {
      const x = util.getRandomIntegerInRange(0, this.width)
      const y = util.getRandomNumberInRange(0, this.height * 0.3)

      this.ctx.fillRect(x, y, 3, 3)
    }
  }

  renderMoon () {
    const centreX = util.getRandomIntegerInRange(MOON_RADIUS, this.width - MOON_RADIUS)
    const centreY = util.getRandomNumberInRange(this.height * 0.15, this.height * 0.2)

    this.ctx.fillStyle = '#00695c'
    this.ctx.arc(centreX, centreY, MOON_RADIUS, 0, Math.PI * 2)
    this.ctx.fill()
  }

  renderMountains (lowY, highY, width, numMountains, color) {
    this.ctx.fillStyle = color

    for (let i = 0, currentX = 0; i < numMountains; i++) {
      const topX = util.getRandomIntegerInRange(currentX, this.width)
      const topY = util.getRandomIntegerInRange(lowY, highY)

      this.renderMountain(topX, topY, width, color)
    }
  }

  renderMountain (topX, topY, width, color) {
    const halfWidth = width / 2
    const bottomLeftX = topX - halfWidth
    const bottomRightX = topX + halfWidth
    const bottomY = this.height + 2

    this.renderTriangle(bottomLeftX, bottomY, topX, topY, bottomRightX, bottomY)
  }

  renderTriangle (x0, y0, x1, y1, x2, y2) {
    this.ctx.beginPath()
    this.ctx.moveTo(x0, y0)
    this.ctx.lineTo(x1, y1)
    this.ctx.lineTo(x2, y2)
    this.ctx.fill()
  }

  setBlurFilter (amount) {
    this.ctx.filter = `blur(${amount}px)`
  }
}

const mountains = new Mountains()
mountains.render()
