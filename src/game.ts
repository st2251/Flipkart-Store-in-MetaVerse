import { addBuilding } from "./modules/building"
import { setSceneOrientation } from "./modules/pivot"
import { addSocialLink } from "./modules/socialLink"
import { addVideoScreen } from "./modules/videoScreen"
import { createDispenser } from "./booth/dispenser"
import { addLogo } from "./modules/logo"
import { addWearable } from "./modules/wearable"

import { addBuilding1 } from "./modules/building1"
import { setSceneOrientation1 } from "./modules/pivot1"
import { addSocialLink1 } from "./modules/socialLink1"
import { addVideoScreen1 } from "./modules/videoScreen1"
import { addLogo1 } from "./modules/logo1"
import { addWearable1 } from "./modules/wearable1"

import { WearablesScanner } from './scanner'
import Door from './door'

import Script11 from "models/c4a799c1-9ef8-4787-914e-4f8c15357881/src/item"
import Script22 from "models/6ef2baf2-3d2e-4093-b22b-34c2b6bb0e7b/src/item"

import { PianoKey, keys } from './pianoKey'
import resources from './resources'
import { createCoin } from './coin'

import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "models/wearables/src/item"
import Script100 from "models/7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"

import utils1 from "../node_modules/decentraland-ecs-utils/index"
import { NFT } from "./nft"
import { data } from "./data"
import { InfoPanel } from "./infoPanel"

import * as utils from "@dcl/ecs-scene-utils"
import { Arcade } from "./gameObjects/arcade"
import { loadPlayer, unloadPlayer } from "./player"
import { loadAtariLevel, loadAtariBricks, unloadAtariBricks } from "./gameLogic/atariLevel"
import { loadBitcoinLevel, loadBitcoinBricks, unloadBitcoinBricks } from "./gameLogic/bitcoinLevel"
import { loadEthereumLevel, loadEthereumBricks, unloadEthereumBricks } from "./gameLogic/ethereumLevel"
import { loadDecentralandLevel, loadDecentralandBricks, unloadDecentralandBricks } from "./gameLogic/decentralandLevel"
import { GameManager } from "./gameManager"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0,0,0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

//--------------------------------------------------------Shop1--------------------------------------------------------------------------------
setSceneOrientation()
addBuilding()
addLogo()
addSocialLink()
addVideoScreen()
addWearable()
//---------------------------------------------------------Shop2------------------------------------------------------------------------
setSceneOrientation1()
addBuilding1()
addLogo1()
addSocialLink1()
addVideoScreen1()
addWearable1()

//-----------------------------------------------------flooring starts------------------------------------------------------------------
const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/FloorBaseTiles_01/FloorBaseTiles_01.glb")
gltfShape.withCollisions =  true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform21 = new Transform({
  position: new Vector3(8, 0, -8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform21)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform22 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform22)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform23 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform23)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform24 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform24)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape)
const transform25 = new Transform({
  position: new Vector3(8,0,40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform25)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape)
const transform26 = new Transform({
  position: new Vector3(-8,0,40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform26)

const entity7 = new Entity('entity7')
engine.addEntity(entity7)
entity7.setParent(_scene)
entity7.addComponentOrReplace(gltfShape)
const transform27 = new Transform({
  position: new Vector3(-8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity7.addComponentOrReplace(transform27)

const entity8 = new Entity('entity8')
engine.addEntity(entity8)
entity8.setParent(_scene)
entity8.addComponentOrReplace(gltfShape)
const transform28 = new Transform({
  position: new Vector3(24, 0, -8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity8.addComponentOrReplace(transform28)

const entity9 = new Entity('entity9')
engine.addEntity(entity9)
entity9.setParent(_scene)
entity9.addComponentOrReplace(gltfShape)
const transform29 = new Transform({
  position: new Vector3(40, 0, -8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity9.addComponentOrReplace(transform29)

const entity10 = new Entity('entity10')
engine.addEntity(entity10)
entity10.setParent(_scene)
entity10.addComponentOrReplace(gltfShape)
const transform30 = new Transform({
  position: new Vector3(-8, 0, -8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1) 
})
entity10.addComponentOrReplace(transform30)

const entity11 = new Entity('entity11')
engine.addEntity(entity11)
entity11.setParent(_scene)
entity11.addComponentOrReplace(gltfShape)
const transform31 = new Transform({
  position: new Vector3(-8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity11.addComponentOrReplace(transform31)

//-----------------------------------------------------------------flooring ends------------------------------------------------------------

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


// Base
// const base = new Entity()
// base.addComponent(new GLTFShape("models/baseLight.glb"))
// base.addComponent(new Transform({ scale: new Vector3(2, 1, 2) }))
// engine.addEntity(base)

// Atari arcade cabinet
const arcadeCabinetAtari = new Arcade(new GLTFShape("models/arcadeCabinetAtari.glb"), new Transform({ 
  position: new Vector3(2,0,46)
}))

// Breakout atari
const atariGameTransform = new Entity()
atariGameTransform.addComponent(new Transform({ position: new Vector3(-0.48, 1.38, -0.155) }))
atariGameTransform.getComponent(Transform).scale.setAll(0.03)
atariGameTransform.getComponent(Transform).rotate(Vector3.Left(), 75)
atariGameTransform.setParent(arcadeCabinetAtari)
let arcadeCabinetAtariTrigger = new utils.TriggerBoxShape(new Vector3(4, 4, 4), new Vector3(0, 2, -2))
loadAtariLevel(atariGameTransform)

arcadeCabinetAtari.addComponent(
  new utils.TriggerComponent(arcadeCabinetAtariTrigger, {
    onCameraEnter: () => {
      if (!GameManager.hasGameLoaded) {
        loadAtariBricks(atariGameTransform)
        loadPlayer(atariGameTransform, arcadeCabinetAtari)
      }
    },
    onCameraExit: () => {
      if (GameManager.hasGameLoaded) {
        unloadAtariBricks()
        unloadPlayer()
      }
    },
    enableDebug: false,   
  })
)

// Bitcoin arcade cabinet
const arcadeCabinetBitcoin = new Arcade(new GLTFShape("models/arcadeCabinetBitcoin.glb"), new Transform({ 
  position: new Vector3(6,0.01,46)
 }))
// arcadeCabinetBitcoin.getComponent(Transform).rotate(Vector3.Up(), -90)

// Breakout bitcoin
const bitcoinGameTransform = new Entity()
bitcoinGameTransform.addComponent(new Transform({ position: new Vector3(-0.48, 1.38, -0.155) }))
bitcoinGameTransform.getComponent(Transform).scale.setAll(0.03)
bitcoinGameTransform.getComponent(Transform).rotate(Vector3.Left(), 75)
bitcoinGameTransform.setParent(arcadeCabinetBitcoin)
let arcadeCabinetBitcoinTrigger = new utils.TriggerBoxShape(new Vector3(4, 4, 4), new Vector3(2, 2, 0))
loadBitcoinLevel(bitcoinGameTransform)

arcadeCabinetBitcoin.addComponent(
  new utils.TriggerComponent(arcadeCabinetBitcoinTrigger, {
    onCameraEnter: () => {
      if (!GameManager.hasGameLoaded) {
        loadBitcoinBricks(bitcoinGameTransform)
        loadPlayer(bitcoinGameTransform, arcadeCabinetBitcoin)
      }
    },
    onCameraExit: () => {
      if (GameManager.hasGameLoaded) {
        unloadBitcoinBricks()
        unloadPlayer()
      }
    },
    enableDebug: false,
  })
)

// Ethereum arcade cabinet
const arcadeCabinetEthereum = new Arcade(new GLTFShape("models/arcadeCabinetEthereum.glb"), new Transform({ 
  position: new Vector3(10,0.01,46)
}))
// arcadeCabinetEthereum.getComponent(Transform).rotate(Vector3.Up(), 180)

// Breakout ethereum
const ethereumGameTransform = new Entity()
ethereumGameTransform.addComponent(new Transform({ position: new Vector3(-0.48, 1.38, -0.155) }))
ethereumGameTransform.getComponent(Transform).scale.setAll(0.03)
ethereumGameTransform.getComponent(Transform).rotate(Vector3.Left(), 75)
ethereumGameTransform.setParent(arcadeCabinetEthereum)
let arcadeCabinetEthereumTrigger = new utils.TriggerBoxShape(new Vector3(4, 4, 4), new Vector3(0, 2, 2))
loadEthereumLevel(ethereumGameTransform)

arcadeCabinetEthereum.addComponent(
  new utils.TriggerComponent(arcadeCabinetEthereumTrigger, {
    onCameraEnter: () => {
      if (!GameManager.hasGameLoaded) {
        loadEthereumBricks(ethereumGameTransform)
        loadPlayer(ethereumGameTransform, arcadeCabinetEthereum)
      }
    },
    onCameraExit: () => {
      if (GameManager.hasGameLoaded) {
        unloadEthereumBricks()
        unloadPlayer()
      }
    },
    enableDebug: false,
  })
)

// Decentraland arcade cabinet
const arcadeCabinetDecentraland = new Arcade(new GLTFShape("models/arcadeCabinetDecentraland.glb"), new Transform({ 
  position: new Vector3(14,0.01,46)
}))
// arcadeCabinetDecentraland.getComponent(Transform).rotate(Vector3.Up(), 90)

// Breakout decentraland
const decentralandGameTransform = new Entity()
decentralandGameTransform.addComponent(new Transform({ position: new Vector3(-0.48, 1.38, -0.155) }))
decentralandGameTransform.getComponent(Transform).scale.setAll(0.03)
decentralandGameTransform.getComponent(Transform).rotate(Vector3.Left(), 75)
decentralandGameTransform.setParent(arcadeCabinetDecentraland)
let arcadeCabinetDecentralandTrigger = new utils.TriggerBoxShape(new Vector3(4, 4, 4), new Vector3(-2, 2, 0))
loadDecentralandLevel(decentralandGameTransform)

arcadeCabinetDecentraland.addComponent(
  new utils.TriggerComponent(arcadeCabinetDecentralandTrigger, {
    onCameraEnter: () => {
      if (!GameManager.hasGameLoaded) {
        loadDecentralandBricks(decentralandGameTransform)
        loadPlayer(decentralandGameTransform, arcadeCabinetDecentraland)
      }
    },
    onCameraExit: () => {
      if (GameManager.hasGameLoaded) {
        unloadDecentralandBricks()
        unloadPlayer()
      }
    },
    enableDebug: false,
  })
)


//------------------------------------------------------------QR Codes code---------------------------------------------------------

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(2.85,0.93,8.54),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(0.4,0.4,0.4)
})
imageFromURL.addComponentOrReplace(transform2)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(7.29,0.93,9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4,0.4,0.4)
})
imageFromURL2.addComponentOrReplace(transform7)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(11.59,0.93,12.92),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4,0.4,0.4)
})
imageFromURL3.addComponentOrReplace(transform8)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(4.60,0.93,13.42),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4,0.4,0.4)
})
imageFromURL4.addComponentOrReplace(transform9)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(40, 5.1, 14.40),
  rotation: Quaternion.Euler(0, 0, 0,), 
  scale: new Vector3(5.6,1.5,0.6)
})
imageFromURL5.addComponentOrReplace(transform10)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(8, 5.1, 14.40),
  rotation: Quaternion.Euler(0, 0, 0,),
  scale: new Vector3(5.6,1.5,0.6)
})
imageFromURL6.addComponentOrReplace(transform11)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
script1.init()
script1.spawn(imageFromURL, {"image":"https://bafybeiegpazlbhaqw7mrl4eqnahxip5bqh4ppf6mm3d7zity23ujgvnjdi.ipfs.dweb.link/avtarSuitQR.png"}, createChannel(channelId, imageFromURL, channelBus))
script1.spawn(imageFromURL2, {"image":"https://bafybeiegpazlbhaqw7mrl4eqnahxip5bqh4ppf6mm3d7zity23ujgvnjdi.ipfs.dweb.link/avtarSuitQR.png"}, createChannel(channelId, imageFromURL2, channelBus))
script1.spawn(imageFromURL3, {"image":"https://bafybeiegpazlbhaqw7mrl4eqnahxip5bqh4ppf6mm3d7zity23ujgvnjdi.ipfs.dweb.link/avtarSuitQR.png"}, createChannel(channelId, imageFromURL3, channelBus))
script1.spawn(imageFromURL4, {"image":"https://bafybeiegpazlbhaqw7mrl4eqnahxip5bqh4ppf6mm3d7zity23ujgvnjdi.ipfs.dweb.link/avtarSuitQR.png"}, createChannel(channelId, imageFromURL4, channelBus))
script1.spawn(imageFromURL5, {"image":"https://bafybeibouwivw3m3dhtlb3iq5bhlihxxt7qxg3pn2qsgdsdejibfzp5tva.ipfs.dweb.link/Flipkart-Plus.jpg"}, createChannel(channelId, imageFromURL5, channelBus))
script1.spawn(imageFromURL6, {"image":"https://bafybeiavauicvjx5gfd7jaijhovjgo6jk7gmszd7r73iog357ioqsdnplq.ipfs.dweb.link/1600858456_HulSrV_Flipkart.jpg"}, createChannel(channelId, imageFromURL6, channelBus))

//-----------------------------------------------------------------QR Codes ends---------------------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------Video Streaming Platform starts---------------------------------------

// Base
const base = new Entity()
base.addComponent(new GLTFShape('models/baseDarkWithCollider.glb'))
base.addComponent(new Transform({ 
  position:new Vector3(16,0,16),
  scale: new Vector3(2, 1, 2)
}))
engine.addEntity(base)

// Seating
const seat = new Entity()
seat.addComponent(new GLTFShape('models/seats.glb'))
seat.addComponent(new Transform({ 
  position: new Vector3(24, 0.05, 32),
  rotation: Quaternion.Euler(0,90,0)  
}))
engine.addEntity(seat)

const screenBody = new Entity()
screenBody.addComponent(new GLTFShape('models/screen.glb'))
screenBody.addComponent(new Transform({ 
  position: new Vector3(38, 0.05, 32),
  rotation: Quaternion.Euler(0,90,0) 
}))
engine.addEntity(screenBody)

// Screen
const screenTransform = new Entity()
screenTransform.addComponent(
  new Transform({ position: new Vector3(0, 6.15, 5) })
)
screenTransform.getComponent(Transform).rotate(Vector3.Right(), -15)
screenTransform.setParent(screenBody)

const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(new Transform({ scale: new Vector3(19.2, 10.8, 1) }))
screen.getComponent(Transform).rotate(Vector3.Up(), 180)
screen.setParent(screenTransform)

screenTransform.getComponent(Transform).scale.setAll(0.625) // You can change the scale of the screen here...

// Video stream link from Vimeo
const videoClip = new VideoClip(
  'https://bafybeibsvhenzjmxt7mlbxv7pwnmjxggpw4yvz6ayfzqi4kuppg4ap5fj4.ipfs.dweb.link/Bas%20karo%20Thoda%20Intezaar.%20Don%27t%20Shop%20Now%21.mp4'
)
const videoTexture = new VideoTexture(videoClip)
videoTexture.play()
videoTexture.loop = false

// Adjust screen material to increase the brightness and clarity
const screenMaterial = new Material()
screenMaterial.albedoTexture = videoTexture
screenMaterial.emissiveTexture = videoTexture
screenMaterial.emissiveColor = Color3.White()
screenMaterial.emissiveIntensity = 0.6
screenMaterial.roughness = 1.0
screen.addComponent(screenMaterial)

//----------------------------------------------Video Streaming Platform ends-------------------------------------------------

// ---------------------------------------------------------------------NFT wall starts------------------------------------------

// Base scene
const baseScene = new Entity()
baseScene.addComponent(new GLTFShape("models/baseScene.glb"))
baseScene.addComponent(
  new Transform({
    position: new Vector3(-16,0,32)
  })
)
engine.addEntity(baseScene)

// UI Elements
const canvas = new UICanvas()
const infoPanel = new InfoPanel(canvas)

// NFTs
const makersPlaceNFT = new NFT(
  new NFTShape("ethereum://" + data[0].address),
  new Transform({
    position: new Vector3(-11, 2.5, 40),
    scale: new Vector3(4, 4, 4),
  }),
  new Color3(0.0, 1.0, 1.5),
  data[0].id,
  infoPanel
)

const cryptoKittiesNFT = new NFT(
  new NFTShape("ethereum://" + data[1].address),
  new Transform({
    position: new Vector3(-8, 2.5, 40),
    scale: new Vector3(4, 4, 4),
  }),
  new Color3(1.5, 1.5, 0.0),
  data[1].id,
  infoPanel
)

const knownOriginNFT = new NFT(
  new NFTShape("ethereum://" + data[2].address),
  new Transform({
    position: new Vector3(-5, 2.5, 40),
    scale: new Vector3(4, 4, 4),
  }),
  new Color3(1.5, 0.5, 0.0),
  data[2].id,
  infoPanel
)

const axieInfinityNFT = new NFT(
  new NFTShape("ethereum://" + data[3].address),
  new Transform({
    position: new Vector3(-11, 2.5, 40),
    scale: new Vector3(5, 5, 5),
  }),
  new Color3(1.5, 0.8, 0.8),
  data[3].id,
  infoPanel
)
axieInfinityNFT.getComponent(Transform).scale.setAll(0)

const chainGuardiansNFT = new NFT(
  new NFTShape("ethereum://" + data[4].address),
  new Transform({
    position: new Vector3(-8, 2.5, 40),
    scale: new Vector3(4, 4, 4),
  }),
  new Color3(0.0, 1.0, 1.5),
  data[4].id,
  infoPanel
)
chainGuardiansNFT.getComponent(Transform).scale.setAll(0)

const myCryptoHeroesNFT = new NFT(
  new NFTShape("ethereum://" + data[5].address),
  new Transform({
    position: new Vector3(-5, 2.5, 40),
    scale: new Vector3(4, 4, 4),
  }),
  new Color3(1.25, 1.25, 1.25),
  data[5].id,
  infoPanel
)
myCryptoHeroesNFT.getComponent(Transform).scale.setAll(0)

const nfts: NFT[] = [makersPlaceNFT, cryptoKittiesNFT, knownOriginNFT, axieInfinityNFT, chainGuardiansNFT, myCryptoHeroesNFT]
const swapNFTEntity = new Entity()

// NOTE: Using the scale instead of the visibility to turn the NFT on / off 
// as there are issues with the colliders getting in the way of each other
// when the user tries to click on an NFT to get more information...
swapNFTEntity.addComponent(
  new utils1.Interval(8000, () => {
    for (let i = 0; i < nfts.length; i++) {
      if (nfts[i].getComponent(Transform).scale.x == 0) {
        nfts[i]
        .getComponent(Transform)
        .scale.set(
          nfts[i].originalScale.x,
          nfts[i].originalScale.y,
          nfts[i].originalScale.z
        )
      } else {
        nfts[i].getComponent(Transform).scale.setAll(0)
      }
    }
  })
)
engine.addEntity(swapNFTEntity)

//-----------------------------------------------------------NFT wall ends----------------------------------------------------

//---------------------------------------------------------- piano starts----------------------------------------------

// Base scene
const baseScene1 = new Entity()
baseScene1.addComponent(resources.models.baseScene)
baseScene1.addComponent(new Transform({
  position: new Vector3(0,0,20)
}))
engine.addEntity(baseScene1)

// For transforming the piano
const scene = new Entity()
scene.addComponent(
  new Transform({
    position: new Vector3(8, 0, 28),
    rotation: Quaternion.Euler(0, 90, 0)
  })
)
engine.addEntity(scene)

const keyShape = new PlaneShape()

// White keys
const whiteKeySounds: AudioClip[] = [
  resources.sounds.whiteKeys.c3,
  resources.sounds.whiteKeys.d3,
  resources.sounds.whiteKeys.e3,
  resources.sounds.whiteKeys.f3,
  resources.sounds.whiteKeys.g3,
  resources.sounds.whiteKeys.a3,
  resources.sounds.whiteKeys.b3,
  resources.sounds.whiteKeys.c4,
  resources.sounds.whiteKeys.d4,
  resources.sounds.whiteKeys.e4,
  resources.sounds.whiteKeys.f4,
  resources.sounds.whiteKeys.g4,
  resources.sounds.whiteKeys.a4,
  resources.sounds.whiteKeys.b4
]

let whiteKeyXPos = -5.55

for (let i = 0; i < whiteKeySounds.length; i++) {
  const key = new PianoKey(
    keyShape,
    new Transform({
      position: new Vector3(whiteKeyXPos, 0.11, 0),
      scale: new Vector3(0.7, 4, 0.5),
      rotation: Quaternion.Euler(90, 0, 0)
    }),
    Color3.White(),
    whiteKeySounds[i],
    resources.trigger.triggerWhitePianoKey,
    i
  )
  key.setParent(scene)
  keys.push(key)
  whiteKeyXPos += 0.8
}

// Black keys
const blackKeySounds: AudioClip[] = [
  resources.sounds.blackKeys.cSharp3,
  resources.sounds.blackKeys.dSharp3,
  resources.sounds.blackKeys.fSharp3,
  resources.sounds.blackKeys.gSharp3,
  resources.sounds.blackKeys.aSharp3,
  resources.sounds.blackKeys.cSharp4,
  resources.sounds.blackKeys.dSharp4,
  resources.sounds.blackKeys.fSharp4,
  resources.sounds.blackKeys.gSharp4,
  resources.sounds.blackKeys.aSharp4
]

let blackKeyXPos = -5.15
let skipKey = 1

for (let i = 0; i < blackKeySounds.length; i++) {
  const key = new PianoKey(
    keyShape,
    new Transform({
      position: new Vector3(blackKeyXPos, 0.12, 1),
      scale: new Vector3(0.45, 2, 0.5),
      rotation: Quaternion.Euler(90, 0, 0)
    }),
    Color3.Black(),
    blackKeySounds[i],
    resources.trigger.triggerBlackPianoKey,
    i + whiteKeySounds.length
  )
  key.setParent(scene)
  keys.push(key)

  // Skip key
  skipKey++
  skipKey % 3 !== 0 ? (blackKeyXPos += 0.8) : (blackKeyXPos += 1.6)
  if (skipKey === 6) skipKey = 1
}

// Modify player's trigger shape
utils.TriggerSystem.instance.setCameraTriggerShape(
  new utils.TriggerBoxShape(
    new Vector3(0.5, 0.25, 0.5),
    new Vector3(0, -0.5, 0)
  )
)

//-----------------------------------------------------------------piano ends---------------------------------------------------

//----------------------------------------------hummingBird Tree starts---------------------------------------------------------------

// Lay out environment

const tree = new Entity()
tree.addComponent(
  new Transform({
    position: new Vector3(24, 0.1, 8),
    scale: new Vector3(1.6, 2.5, 1.6)
  })
)
tree.addComponent(new GLTFShape('models/Tree.gltf'))
tree.addComponent(new Animator())
const treeClip = new AnimationState('Tree_Action', { looping: false })
tree.getComponent(Animator).addClip(treeClip)
tree.addComponent(
  new OnPointerDown(
    (e) => {
      //treeClip.stop()
      treeClip.play()
      log('new bird')
      newBird()
    },
    { button: ActionButton.POINTER, hoverText: 'Shake' }
  )
)
engine.addEntity(tree)

const ground = new Entity()
ground.addComponent(
  new Transform({
    position: new Vector3(24, 0.1, 8),
    scale: new Vector3(1.6, 1.6, 1.6)
  })
)
ground.addComponent(new GLTFShape('models/Ground.gltf'))
engine.addEntity(ground)

/////////////////////
// Other functions

// Starting coordinates for all birds

const startPosition = new Vector3(29, 3.5, 5.5)
const birdScale = new Vector3(0.2, 0.2, 0.2)

// Create a new bird

const birdShape = new GLTFShape('models/hummingbird.glb')

let birdCounter = 0

function newBird() {
  if (birdCounter > 10) {
    return
  }

  birdCounter += 1

  const bird = new Entity()

  bird.addComponent(
    new Transform({
      position: startPosition,
      scale: birdScale
    })
  )

  bird.addComponent(birdShape)
  const birdAnim = new Animator()
  bird.addComponent(birdAnim)
  const flyAnim = new AnimationState('fly', { layer: 0 })
  flyAnim.speed = 2
  const lookAnim = new AnimationState('look', { looping: false, layer: 1 })
  const shakeAnim = new AnimationState('shake', { looping: false, layer: 1 })
  birdAnim.addClip(flyAnim)
  birdAnim.addClip(lookAnim)
  birdAnim.addClip(shakeAnim)
  flyAnim.play()

  // first sprint
  const nextPos = new Vector3(
    Math.random() * 12 + 2,
    Math.random() * 3 + 1,
    Math.random() * 12 + 2
  )
  bird.getComponent(Transform).lookAt(nextPos)
  bird.addComponent(new utils.MoveTransformComponent(startPosition, nextPos, 2))

  // keep sprinting on a regular basis
  bird.addComponent(
    new utils.Interval(Math.floor(Math.random() * 3000) + 3000, () => {
      const nextPos = new Vector3(
        Math.random() * 12 + 2,
        Math.random() * 3 + 1,
        Math.random() * 12 + 2
      )
      bird.getComponent(Transform).lookAt(nextPos)
      bird.addComponent(
        new utils.MoveTransformComponent(
          bird.getComponent(Transform).position,
          nextPos,
          2,
          () => {
            randomHeadMovement(bird)
          }
        )
      )
    })
  )

  engine.addEntity(bird)
}

// Randomly determine if any head moving animations are played
export function randomHeadMovement(bird: IEntity) {
  const anim = Math.random()
  if (anim < 0.2) {
    const move = bird.getComponent(Animator).getClip('look')
    move.play()
  } else if (anim > 0.8) {
    const move = bird.getComponent(Animator).getClip('shake')
    move.play()
  }
}

//--------------------------------------------------------hummingBird Tree ends---------------------------------------------------

//----------------------------------------------------FlipKartCoin CollectionGame starts-----------------------------------------------------


// Adding base scene models
// const base = new Entity()
// base.addComponent(new GLTFShape('models/baseLight.glb'))
// engine.addEntity(base)

const platform = new Entity()
platform.addComponent(new GLTFShape('models/platform.glb'))
platform.addComponent(new Transform({
  position: new Vector3(-16,0,16)
}))
engine.addEntity(platform)

const coinShape = new GLTFShape('models/coin.glb') // Includes the spinning animation

// Contains the positions for each coin
const coinPositions = [
  new Vector3(-13.8, 1.5, 18.2),
  new Vector3(-10.8, 1.5, 18.2),
  new Vector3(-8, 1.5, 18.2),
  new Vector3(-5.2, 1.5, 18.2),
  new Vector3(-2.2, 1.5, 18.2),
  new Vector3(-2.2, 2.18, 21),
  new Vector3(-2.2, 2.8, 24),
  new Vector3(-5.2, 2.8, 24),
  new Vector3(-8, 2.8, 24),
  new Vector3(-10.8, 2.8, 24),
  new Vector3(-13.8, 2.8, 24),
  new Vector3(-13.8, 3.4, 26.9),
  new Vector3(-13.8, 3.9, 29.8),
  new Vector3(-10.8, 3.9, 29.8),
  new Vector3(-8, 3.9, 29.8),
  new Vector3(-5.2, 3.9, 29.8),
  new Vector3(-2.2, 3.9, 29.8),
]

const triggerBoxShape = new utils.TriggerBoxShape(
  new Vector3(1.5, 3, 1.5),
  new Vector3(0, 1, 0)
) // Trigger shape for coin

// Setup the coins
for (const coinPosition of coinPositions) {
  createCoin(
    coinShape,
    new Transform({ position: coinPosition }),
    triggerBoxShape
  )
}

//----------------------------------------------------FlipKartCoin CollectionGame ends-----------------------------------------------------

//----------------------------------------------------FlipkartPlus Token Scanner starts-------------------------------------------------------

export const sceneMessageBus = new MessageBus()

const door = new Door(
  new GLTFShape('models/Door_Fantasy.glb'),
  {
    position: new Vector3(42.15, 0, 14.20),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(2.5,1,1)
  },
  'Open',
  'Close'
)

const scanner = new WearablesScanner(
  { position: new Vector3(37, 0, 15) },
  'urn:decentraland:off-chain:base-avatars:thug_life',
  sceneMessageBus,
  () => {
    sceneMessageBus.emit('openDoor', {})
    door.addComponentOrReplace(
      new utils.Delay(5000, () => {
        sceneMessageBus.emit('closeDoor', {})
      })
    )
  },
  () => {
    sceneMessageBus.emit('closeDoor', {})
  }
)

sceneMessageBus.on('scanning', () => {
  scanner.scan()
})

sceneMessageBus.on('scanapprove', () => {
  scanner.approve()
})

sceneMessageBus.on('scanreject', () => {
  scanner.reject()
})

sceneMessageBus.on('openDoor', () => {
  if (!door.isOpen) {
    door.toggle(true)
  }
})
sceneMessageBus.on('closeDoor', () => {
  if (door.isOpen) {
    door.toggle(false)
  }
})

const scanner1 = new WearablesScanner(
  { position: new Vector3(42.95, 0, 13.71),
    rotation: Quaternion.Euler(0,180,0) },
  'urn:decentraland:off-chain:base-avatars:thug_life',
  sceneMessageBus,
  () => {
    sceneMessageBus.emit('openDoor', {})
    door.addComponentOrReplace(
      new utils.Delay(5000, () => {
        sceneMessageBus.emit('closeDoor', {})
      })
    )
  },
  () => {
    sceneMessageBus.emit('closeDoor', {})
  }
)

sceneMessageBus.on('scanning', () => {
  scanner1.scan()
})

sceneMessageBus.on('scanapprove', () => {
  scanner1.approve()
})

sceneMessageBus.on('scanreject', () => {
  scanner1.reject()
})

sceneMessageBus.on('openDoor', () => {
  if (!door.isOpen) {
    door.toggle(true)
  }
})
sceneMessageBus.on('closeDoor', () => {
  if (door.isOpen) {
    door.toggle(false)
  }
})


//----------------------------------------------------FlipkartPlus Token Scanner ends-------------------------------------------------------

//--------------------------------------------Billboard and banner starts-------------------------------------------------------------

const imageBillboardBlack = new Entity('imageBillboardBlack')
engine.addEntity(imageBillboardBlack)
imageBillboardBlack.setParent(_scene)
const transform111 = new Transform({
  position: new Vector3(28.21,0,13),
  rotation: Quaternion.Euler(0, -45, 0),
  scale: new Vector3(2, 2, 2)
})
imageBillboardBlack.addComponentOrReplace(transform111)

const imageScreen = new Entity('imageScreen')
engine.addEntity(imageScreen)
imageScreen.setParent(_scene)
const transform121 = new Transform({
  position: new Vector3(-12, 0, 8),
  rotation: Quaternion.Euler(0, 145, 0),
  scale: new Vector3(0.6, 0.6, 0.6)
})
imageScreen.addComponentOrReplace(transform121)

const channelId1 = Math.random().toString(16).slice(2)
const channelBus1 = new MessageBus()

const script11 = new Script11()
const script22 = new Script22()
script11.init()
script22.init()
script11.spawn(imageBillboardBlack, {"image":"https://bafybeicvk22pvfqxtehwozr3bbk6kua2uzj5ngyb7mgisvllycimzi5fji.ipfs.dweb.link/flipkart_plus.jpg"}, createChannel(channelId1, imageBillboardBlack, channelBus1))
script22.spawn(imageScreen, {"image":"https://bafybeiawevsjnojmluim6y3hsk5nwky5abxibd32xfuki7n5zhszmskvzu.ipfs.dweb.link/SuperCoins_Main_Banner_.jpg"}, createChannel(channelId1, imageScreen, channelBus1))

//--------------------------------------------Billboard and banner ends-------------------------------------------------------------

const pm1 = new Entity('pm1')
engine.addEntity(pm1)
pm1.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(13.8,1.55,11.56),
  rotation: Quaternion.Euler(0, 90, 0,),
  scale: new Vector3(2.82, 4.08, 2)
})
pm1.addComponentOrReplace(transform61)

const pm2 = new Entity('pm2')
engine.addEntity(pm2)
pm2.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(2.2,1.55,11.56),
  rotation: Quaternion.Euler(0, 90, 0),
  scale: new Vector3(2.82, 4.08, 2)
})
pm2.addComponentOrReplace(transform71)

const channelId22 = Math.random().toString(16).slice(2)
const channelBus22 = new MessageBus()

const script100 = new Script100()
script100.init()
script100.spawn(pm1, {"image":"https://bafybeigp2odug5gjmezwtayltfahnetwzqd7z4lb3gxp5gx2vlgo6wd2pa.ipfs.dweb.link/001.jpg"}, createChannel(channelId22, pm1, channelBus22))
script100.spawn(pm2, {"image":"https://bafybeifvs3s77zchm2zqndzusj5vpeotfcyrtj4i7sa6wwxcfnumzerkmy.ipfs.dweb.link/004.jpg"}, createChannel(channelId22, pm2, channelBus22))