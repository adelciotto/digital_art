/** @jsx element */

import { createApp, element } from 'deku'
import styles from './artwork.css'

const DEFAULT_WIDTH = 300
const DEFAULT_HEIGHT = 150
const DEFAULT_PROPS = {
  name: '',
  canvasWidth: DEFAULT_WIDTH,
  canvasHeight: DEFAULT_HEIGHT,
  containerClassName: '',
  canvasClassName: ''
}

export class Artwork {
  constructor (props = {}) {
    this.props = { ...DEFAULT_PROPS, ...props }
    this.canvasId = `${props.name}Canvas`

    const renderToDOM = createApp(document.body)

    renderToDOM(this.renderCanvas())

    this.canvas = document.getElementById(this.canvasId)
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.ctx = this.canvas.getContext('2d')
  }

  render () {
    const size = 150
    const x = this.width / 2 - size / 2
    const y = this.height / 2 - size / 2

    this.ctx.translate(x, y)
    this.ctx.fillStyle = '#0091EA'
    this.ctx.fillRect(0, 0, size, size)
  }

  renderCanvas () {
    const { containerClassName, canvasClassName, canvasWidth, canvasHeight } = this.props
    const containerClasses = `${styles.canvasContainer} ${styles.frame} ${containerClassName}`
    const canvasClasses = `${styles.canvas} ${canvasClassName}`

    return (
      <div class={containerClasses}>
        <canvas id={this.canvasId} class={canvasClasses} width={canvasWidth} height={canvasHeight} />
      </div>
    )
  }
}
