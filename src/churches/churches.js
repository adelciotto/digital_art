import { Artwork } from 'common'
import Church from './church'

import styles from './styles.css'

class Churches extends Artwork {
  constructor () {
    super({
      name: 'churches',
      containerClassName: styles.canvasContainer,
      canvasClassName: styles.canvas
    })
  }

  render () {
    const churchA = new Church({
      startX: 100,
      startY: this.height + 50,
      width: 100,
      height: this.height,
      useRandomHeights: false
    })
    const churchB = new Church({
      startX: this.width / 2 - 60,
      startY: this.height + 50,
      width: 120,
      height: this.height - 10
      //useRandomHeights: false
    })
    const churchC = new Church({
      startX: 15,
      startY: this.height + 50,
      width: 80,
      height: this.height - 50,
      leanDirection: -1
    })

    churchC.draw(this.ctx)
    churchB.draw(this.ctx)
  }
}

const churches = new Churches()

churches.render()

//const Church = require('./church')

//const CANVAS_ID = 'mainCanvas'

//const canvas = document.getElementById(CANVAS_ID)
//const ctx = canvas.getContext('2d')
//const canvasWidth = canvas.width
//const canvasHeight = canvas.height

//function draw () {
  //})

  ////churchA.draw(ctx)
  //churchC.draw(ctx)
  //churchB.draw(ctx)
//}

//draw()
