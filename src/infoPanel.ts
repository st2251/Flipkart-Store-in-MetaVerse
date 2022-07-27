import { data } from "./data"

export class InfoPanel {
  private container: UIContainerRect
  private dropShadow: UIImage
  private mainPanel: UIImage
  private nftImage: UIImage
  private nftType: UIText
  private nftTitle: UIText
  private nftDetails: UIText
  private nftDirectLink: UIText
  private sound: Entity = new Entity()

  constructor(canvas: UICanvas) {
    // Container
    this.container = new UIContainerRect(canvas)
    this.container.width = "100%"
    this.container.height = "100%"
    this.container.positionY = 25
    this.container.visible = false

    // Drop Shadow
    this.dropShadow = new UIImage(
      this.container,
      new Texture("images/shadow.png")
    )
    this.dropShadow.sourceWidth = 960
    this.dropShadow.sourceHeight = 1200
    this.dropShadow.width = 485
    this.dropShadow.height = 606
    this.dropShadow.opacity = 0.2

    // Main Panel
    this.mainPanel = new UIImage(
      this.container,
      new Texture("images/mainPanel.png")
    )
    this.mainPanel.sourceWidth = 960
    this.mainPanel.sourceHeight = 1200
    this.mainPanel.width = 480
    this.mainPanel.height = 600

    // NFT Type
    this.nftType = new UIText(this.container)
    this.nftType.hAlign = "center"
    this.nftType.vAlign = "center"
    this.nftType.positionX = -143
    this.nftType.positionY = 265
    this.nftType.fontSize = 16
    this.nftType.fontWeight = "normal"
    this.nftType.color = new Color4(1, 0.1, 0.4)
    this.nftType.value = "Not Found"
    this.nftType.visible = false

    // NFT Title
    this.nftTitle = new UIText(this.container)
    this.nftTitle.hAlign = "center"
    this.nftTitle.vAlign = "center"
    this.nftTitle.positionX = -143
    this.nftTitle.positionY = 233
    this.nftTitle.fontSize = 25
    this.nftTitle.fontWeight = "bold"
    this.nftTitle.color = Color4.Black()
    this.nftTitle.value = "Not Found"
    this.nftTitle.visible = false

    // Image
    this.nftImage = new UIImage(
      this.container,
      new Texture("images/mainPanel.png") // Default image if nothing is found ...
    )
    this.nftImage.sourceWidth = 1024
    this.nftImage.sourceHeight = 1024
    this.nftImage.width = 384
    this.nftImage.height = 384
    this.nftImage.visible = false

    // Close button to the top right
    const closeButton = new UIImage(
      this.container,
      new Texture("images/closeButton.png")
    )
    closeButton.sourceWidth = 50
    closeButton.sourceHeight = 50
    closeButton.width = 37.5
    closeButton.height = 37.5
    closeButton.positionX = 206
    closeButton.positionY = 265
    closeButton.isPointerBlocker = true
    closeButton.onClick = new OnClick((): void => {
      this.closeInfoPanel()
    })

    // NFT Details
    this.nftDetails = new UIText(this.container)
    this.nftDetails.adaptWidth = true
    this.nftDetails.hAlign = "center"
    this.nftDetails.vAlign = "center"
    this.nftDetails.positionY = -208
    this.nftDetails.fontSize = 18
    this.nftDetails.fontWeight = "bold"
    this.nftDetails.color = Color4.Black()
    this.nftDetails.value = "Not Found"
    this.nftDetails.visible = false

    // NFT Direct Link
    this.nftDirectLink = new UIText(this.container)
    this.nftDirectLink.adaptWidth = true
    this.nftDirectLink.hAlign = "center"
    this.nftDirectLink.vAlign = "center"
    this.nftDirectLink.positionY = -233
    this.nftDirectLink.fontSize = 10
    this.nftDirectLink.fontWeight = "normal"
    this.nftDirectLink.color = Color4.Black()
    this.nftDirectLink.value = "Not Found"
    this.nftDirectLink.visible = false

    // Sound
    this.sound.addComponent(
      new Transform({
        position: new Vector3(8, 0, 8),
      })
    )
    this.sound.addComponent(
      new AudioSource(
        new AudioClip("sounds/navigation_backward-selection-minimal.mp3")
      )
    )
    engine.addEntity(this.sound)
  }

  public openInfoPanel(id: number): void {
    for (let i = 0; i < data.length; i++) {
      if (id == data[i].id) {
        log(data[i].images)
        this.nftType.value = data[i].type
        this.nftTitle.value = data[i].title
        this.nftImage.source = new Texture(data[i].images)
        this.nftDetails.value = data[i].details.info
        this.nftDetails.fontSize = data[i].details.fontSize
        this.nftDirectLink.value = data[i].directLink.link
        this.nftDirectLink.fontSize = data[i].directLink.fontSize
      }
    }

    this.container.visible = true
    this.nftType.visible = true
    this.nftTitle.visible = true
    this.nftImage.visible = true
    this.nftDetails.visible = true
    this.nftDirectLink.visible = true
  }

  private closeInfoPanel(): void {
    this.container.visible = false
    this.nftType.visible = false
    this.nftTitle.visible = false
    this.nftImage.visible = false
    this.nftDetails.visible = false
    this.nftDirectLink.visible = false
    this.sound.getComponent(AudioSource).playOnce()
  }
}
