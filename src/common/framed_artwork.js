/** @jsx element */

import { createApp, element } from 'deku'
import styles from './framed_artwork.css'

const DEFAULT_WIDTH = 300
const DEFAULT_HEIGHT = 150
const DEFAULT_PROPS = {
  name: '',
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
  containerClassName: '',
  canvasClassName: ''
}

export class FramedArtwork {
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
    const size = 100
    const x = this.width / 2 - size / 2
    const y = this.height / 2 - size / 2

    this.ctx.translate(x, y)
    this.ctx.fillStyle = '#0091EA'
    this.ctx.fillRect(0, 0, size, size)
  }

  renderCanvas () {
    const { containerClassName, canvasClassName, width, height, name } = this.props
    const containerClasses = `${styles.canvasContainer} ${styles.frame} ${containerClassName}`
    const containerInlineStyles = [
      `width: ${width}px`,
      `height: ${height}px`
    ].join(';')

    return (
      <div class={containerClasses} style={containerInlineStyles}>
        <canvas
          id={this.canvasId}
          class={canvasClassName}
          width={width}
          height={height} />
        <div class={styles.signature}>{name} by adelciotto</div>
      </div>
    )
  }
}
