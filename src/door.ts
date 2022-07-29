const invisibleMaterial = new Material()
invisibleMaterial.albedoColor = new Color4(0, 0, 0, 0)

export default class Door extends Entity {
  isOpen: boolean = false
  openAnim: AnimationState
  closeAnim: AnimationState
  invisibleWall: BoxShape
  openClip = new AudioClip('sounds/open.mp3')
  closeClip = new AudioClip('sounds/close.mp3')

  constructor(
    model: GLTFShape,
    pos: TranformConstructorArgs,
    openAnim: string,
    closeAnim: string,
    open?: boolean,
    invisibleWall?: boolean,
    invisibleWallTransform?: TranformConstructorArgs
  ) {
    super()
    this.addComponent(new Transform(pos))
    this.addComponent(model)
    engine.addEntity(this)

    const animator = new Animator()
    this.openAnim = new AnimationState(openAnim, { looping: false })
    this.closeAnim = new AnimationState(closeAnim, { looping: false })
    animator.addClip(this.closeAnim)
    animator.addClip(this.openAnim)
    this.addComponent(animator)
    this.openAnim.stop()

    if (open) {
      this.isOpen = open
      this.openAnim.play()
    }

    if (invisibleWall === true) {
      const invisibleWallEntity = new Entity()
      invisibleWallEntity.addComponent(new Transform(invisibleWallTransform))
      this.invisibleWall = new BoxShape()
      invisibleWallEntity.addComponent(this.invisibleWall)
      this.invisibleWall.isPointerBlocker = true
      this.invisibleWall.withCollisions = true
      invisibleWallEntity.addComponent(invisibleMaterial)
      engine.addEntity(invisibleWallEntity)
    }
  }

  toggle(value: boolean, playSound = true) {
    if (this.isOpen === value) return
    this.isOpen = value

    if (playSound) {
      const source = new AudioSource(value ? this.openClip : this.closeClip)
      this.addComponentOrReplace(source)
      source.playing = true
    }

    const animator = this.getComponent(Animator)

    const clip = value ? this.openAnim : this.closeAnim
    clip.play()

    if (this.invisibleWall) {
      this.invisibleWall.isPointerBlocker = !value
      this.invisibleWall.withCollisions = !value
    }
  }
}
