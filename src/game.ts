import { addBuilding } from "./modules/building"
import { setSceneOrientation } from "./modules/pivot"
import { addSocialLink } from "./modules/socialLink"
import { addVideoScreen } from "./modules/videoScreen"
import { createDispenser } from "./booth/dispenser"
import { addLogo } from "./modules/logo"
import { addWearable } from "./modules/wearable"

setSceneOrientation()
addBuilding()
addLogo()
addSocialLink()
addVideoScreen()
addWearable()

// change the eventUUID to your event
// check following links about how to setup POAP event
// https://docs.decentraland.org/development-guide/poap-tokens/
// https://github.com/decentraland-scenes/POAP-Booth
createDispenser(
    {
        position: new Vector3(8 + 5.5, 0, 8),
        rotation: Quaternion.Euler(0, -90, 0)
    },
    'acd27e4b-24bd-4040-b715-c0e11e863fb0'
)

