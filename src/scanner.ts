import * as utils from '@dcl/ecs-scene-utils'
import { getUserData } from '@decentraland/Identity'

export class WearablesScanner extends Entity {
  filter: string
  scanAnim: AnimationState
  allowAnim: AnimationState
  rejectAnim: AnimationState
  scanAudio: AudioClip = new AudioClip('sounds/LaserHum.mp3')
  allowAudio: AudioClip = new AudioClip('sounds/accept.mp3')
  rejectAudio: AudioClip = new AudioClip('sounds/access_denied.mp3')
  constructor(
    position: TranformConstructorArgs,
    filter: string,
    messageBus: MessageBus,
    successAction: () => void,
    rejectAction?: () => void,
    triggerPos?: TranformConstructorArgs,
    triggerScale?: Vector3
  ) {
    super()
    engine.addEntity(this)

    this.filter = filter

    this.addComponent(new GLTFShape('models/scanner/Wearable-Reader.glb'))
    this.addComponent(new Transform(position))

    this.addComponent(new Animator())
    this.scanAnim = new AnimationState('Laser_Action', { looping: false })
    this.allowAnim = new AnimationState('Allow_Action', { looping: false })
    this.rejectAnim = new AnimationState('NotAllow_Action', { looping: false })

    this.getComponent(Animator).addClip(this.scanAnim)
    this.getComponent(Animator).addClip(this.allowAnim)
    this.getComponent(Animator).addClip(this.rejectAnim)

    if (!triggerScale) {
      triggerScale = new Vector3(2.5, 2.5, 2.5)
    }

    const scannerTriggerEntity = new Entity()

    if (!triggerPos) {
      triggerPos = { position: new Vector3(0, 1.5, 2) }
      scannerTriggerEntity.setParent(this)
    }

    scannerTriggerEntity.addComponent(new Transform(triggerPos))

    const triggerBox = new utils.TriggerBoxShape(triggerScale, Vector3.Zero())

    scannerTriggerEntity.addComponent(
      new utils.TriggerComponent(triggerBox, {
        onCameraEnter: () => {
          log('triggered scanner')
          messageBus.emit('scanning', {})

          scannerTriggerEntity.addComponentOrReplace(
            new utils.Delay(4000, async () => {
              const userData = await getUserData()

              log('Currently wearing: ', userData.avatar.wearables)
              let result = false
              for (const wearable of userData.avatar.wearables) {
                if (wearable === this.filter) {
                  result = true
                }
              }

              log('HAS WEARABLE? ', result)
              if (result === true) {
                messageBus.emit('scanapprove', {})
                successAction()
              } else {
                messageBus.emit('scanreject', {})
                rejectAction ? rejectAction() : null
              }
            })
          )
        }
      })
    )

    engine.addEntity(scannerTriggerEntity)
  }

  public scan(): void {
    this.allowAnim.stop()
    this.rejectAnim.stop()
    this.scanAnim.stop()
    this.scanAnim.play()
    const thisScanner = this
    this.addComponentOrReplace(
      new AudioSource(thisScanner.scanAudio)
    ).playOnce()
  }

  public approve(): void {
    this.scanAnim.stop()
    this.allowAnim.play()
    const thisScanner = this
    this.addComponentOrReplace(
      new AudioSource(thisScanner.allowAudio)
    ).playOnce()
  }

  public reject(): void {
    this.scanAnim.stop()
    this.rejectAnim.play()
    const thisScanner = this
    this.addComponentOrReplace(
      new AudioSource(thisScanner.rejectAudio)
    ).playOnce()
  }
}
