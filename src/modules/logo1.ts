import config from "../config"
import { pivotScene } from "./pivot1"

export function addLogo1() {
    //TOP LOGO
    const topLogoData = config.logo.top

    const myEntity = new Entity()
    const myText = new TextShape(topLogoData.name)

    myText.font = new Font(Fonts.LiberationSans)
    myText.color = topLogoData.color
    myText.fontSize = topLogoData.fontSize

    myText.shadowColor = Color3.Gray()
    myText.shadowOffsetY = 0.5
    myText.shadowOffsetX = -0.5

    myEntity.addComponent(myText)


    myEntity.addComponent(new Transform({
        position: topLogoData.position,
        rotation: Quaternion.Euler(0, 180, 0)
    }))
    myEntity.setParent(pivotScene)

    //BOTTOM LOGO
    const bottomLogoData = config.logo.bottom
    
    const logoParent = new Entity()
    logoParent.addComponent(new Transform({
        position: config.logo.bottom.position,
        rotation: Quaternion.Euler(0, 0, 0)
    }))
    
    let imageTexture = new Texture(bottomLogoData.imgSrc)
    let pictureMat = new Material()
    pictureMat.albedoTexture = imageTexture
    pictureMat.specularIntensity = 0
    pictureMat.metallic = 0
    pictureMat.roughness = 1
    pictureMat.emissiveTexture = imageTexture
    pictureMat.emissiveIntensity = 0.5
    pictureMat.emissiveColor = Color3.White()
    pictureMat.transparencyMode = 1

    const imgFront = new Entity()
    imgFront.addComponent(new PlaneShape())
    imgFront.addComponent(new Transform({
        position: new Vector3(-0.1, 0, 0),
        rotation: Quaternion.Euler(0, 90, 180),
        scale: new Vector3(1, 1, 1)
    }))
    imgFront.addComponent(pictureMat)

    const imgBack = new Entity()
    imgBack.addComponent(new PlaneShape())
    imgBack.addComponent(new Transform({
        position: new Vector3(0.1, 0, 0),
        rotation: Quaternion.Euler(0, -90, 180),
        scale: new Vector3(1, 1, 1)
    }))
    imgBack.addComponent(pictureMat)

    imgFront.setParent(logoParent)
    imgBack.setParent(logoParent)

    logoParent.setParent(pivotScene)
}