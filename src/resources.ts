import * as utils from '@dcl/ecs-scene-utils'

export default {
  models: {
    baseScene: new GLTFShape('models/baseScenePiano.glb')
  },
  sounds: {
    whiteKeys: {
      c3: new AudioClip('sounds/whiteKeys/c3.mp3'),
      d3: new AudioClip('sounds/whiteKeys/d3.mp3'),
      e3: new AudioClip('sounds/whiteKeys/e3.mp3'),
      f3: new AudioClip('sounds/whiteKeys/f3.mp3'),
      g3: new AudioClip('sounds/whiteKeys/g3.mp3'),
      a3: new AudioClip('sounds/whiteKeys/a3.mp3'),
      b3: new AudioClip('sounds/whiteKeys/b3.mp3'),
      c4: new AudioClip('sounds/whiteKeys/c4.mp3'),
      d4: new AudioClip('sounds/whiteKeys/d4.mp3'),
      e4: new AudioClip('sounds/whiteKeys/e4.mp3'),
      f4: new AudioClip('sounds/whiteKeys/f4.mp3'),
      g4: new AudioClip('sounds/whiteKeys/g4.mp3'),
      a4: new AudioClip('sounds/whiteKeys/a4.mp3'),
      b4: new AudioClip('sounds/whiteKeys/b4.mp3')
    },
    blackKeys: {
      cSharp3: new AudioClip('sounds/blackKeys/cSharp3.mp3'),
      dSharp3: new AudioClip('sounds/blackKeys/dSharp3.mp3'),
      fSharp3: new AudioClip('sounds/blackKeys/fSharp3.mp3'),
      gSharp3: new AudioClip('sounds/blackKeys/gSharp3.mp3'),
      aSharp3: new AudioClip('sounds/blackKeys/aSharp3.mp3'),
      cSharp4: new AudioClip('sounds/blackKeys/cSharp4.mp3'),
      dSharp4: new AudioClip('sounds/blackKeys/dSharp4.mp3'),
      fSharp4: new AudioClip('sounds/blackKeys/fSharp4.mp3'),
      gSharp4: new AudioClip('sounds/blackKeys/gSharp4.mp3'),
      aSharp4: new AudioClip('sounds/blackKeys/aSharp4.mp3')
    }
  },
  trigger: {
    triggerWhitePianoKey: new utils.TriggerBoxShape(
      new Vector3(0.35, 3, 2),
      new Vector3(0, 0, -1)
    ),
    triggerBlackPianoKey: new utils.TriggerBoxShape(
      new Vector3(0.35, 3, 2),
      Vector3.Zero()
    )
  }
}
