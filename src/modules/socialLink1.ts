import config from "../config"
import { pivotScene } from "./pivot1"

export function addSocialLink1() {
    for (let linkData of config.socialMedia) {
        let clickableLink = new Entity()
        clickableLink.setParent(pivotScene)

        clickableLink.addComponent(new GLTFShape(linkData.model))
        clickableLink.addComponent(new Transform({
            position: linkData.position,
            rotation: Quaternion.Euler(0, 90, 0)
        }))

        clickableLink.addComponent(new OnPointerDown(() => {
            openExternalURL(linkData.link)
        },
            {
                hoverText: linkData.name,
                distance: 10
            }))
    }
}