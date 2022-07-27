import { addBuilding } from "./modules/building"
import { setSceneOrientation } from "./modules/pivot"
import { addSocialLink } from "./modules/socialLink"
import { addVideoScreen } from "./modules/videoScreen"
import { createDispenser } from "./booth/dispenser"
import { addLogo } from "./modules/logo"
import { addWearable } from "./modules/wearable"

import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "models/wearables/src/item"



import * as utils from "@dcl/ecs-scene-utils"
import { Arcade } from "./gameObjects/arcade"
import { loadPlayer, unloadPlayer } from "./player"
import { loadAtariLevel, loadAtariBricks, unloadAtariBricks } from "./gameLogic/atariLevel"
import { loadBitcoinLevel, loadBitcoinBricks, unloadBitcoinBricks } from "./gameLogic/bitcoinLevel"
import { loadEthereumLevel, loadEthereumBricks, unloadEthereumBricks } from "./gameLogic/ethereumLevel"
import { loadDecentralandLevel, loadDecentralandBricks, unloadDecentralandBricks } from "./gameLogic/decentralandLevel"
import { GameManager } from "./gameManager"

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


// Base
// const base = new Entity()
// base.addComponent(new GLTFShape("models/baseLight.glb"))
// base.addComponent(new Transform({ scale: new Vector3(2, 1, 2) }))
// engine.addEntity(base)

// Atari arcade cabinet
const arcadeCabinetAtari = new Arcade(new GLTFShape("models/arcadeCabinetAtari.glb"), new Transform({ position: new Vector3(2,0,30.49) }))

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
const arcadeCabinetBitcoin = new Arcade(new GLTFShape("models/arcadeCabinetBitcoin.glb"), new Transform({ position: new Vector3(6,0.01,30.49) }))
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
const arcadeCabinetEthereum = new Arcade(new GLTFShape("models/arcadeCabinetEthereum.glb"), new Transform({ position: new Vector3(10,0.01,30.49) }))
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
const arcadeCabinetDecentraland = new Arcade(new GLTFShape("models/arcadeCabinetDecentraland.glb"), new Transform({ position: new Vector3(14,0.01,30.49) }))
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
const transform2 = new Transform({
  position: new Vector3(2.85,0.93,8.54),
  rotation: Quaternion.Euler(0,90,0),
  scale: new Vector3(0.4, 0.4, 0.4)
})
imageFromURL.addComponentOrReplace(transform2)
engine.addEntity(imageFromURL)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)

const script1 = new Script1()
script1.init()
script1.spawn(imageFromURL, {"image":"https://bafybeiegpazlbhaqw7mrl4eqnahxip5bqh4ppf6mm3d7zity23ujgvnjdi.ipfs.dweb.link/avtarSuitQR.png"}, createChannel(channelId, imageFromURL, channelBus))

// const a = new Entity()
// a.addComponent(new GLTFShape("models/wearables/mens_two_piece_suit/scene.gltf"))
// a.addComponent(new Transform({
//   position:new Vector3(-5.48,0.88,25.82),
//   rotation:Quaternion.Euler(0,0,0),
//   scale:new Vector3(1,1,1)
// }))
// engine.addEntity(a)