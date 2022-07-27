import { InfoPanel } from "./infoPanel"

export class NFT extends Entity {
  public id: number
  public originalScale: Vector3 // Scale to revert back to once the "visibility" is turned back on

  constructor(
    nft: NFTShape,
    transform: Transform,
    color: Color3,
    id: number,
    infoPanel: InfoPanel,
  ) {
    super()
    engine.addEntity(this)
    this.addComponent(nft)
    this.addComponent(transform)
    this.originalScale = new Vector3(
      transform.scale.x,
      transform.scale.y,
      transform.scale.z
    )
    this.getComponent(NFTShape).color = color
    this.id = id

    // Sound
    this.addComponent(
      new AudioSource(
        new AudioClip("sounds/navigation_forward-selection-minimal.mp3")
      )
    )

    this.addComponent(
      new OnPointerDown(
        (): void => {
          this.getComponent(AudioSource).playOnce()
          infoPanel.openInfoPanel(this.id)
        },
        {
          button: ActionButton.POINTER,
          showFeedback: true,
          hoverText: "More Info",
          distance: 8,
        }
      )
    )
  }
}
