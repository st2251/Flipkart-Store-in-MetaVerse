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

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0,0,0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

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
// const suit = new Entity('suit')
// engine.addEntity(suit)
// suit.setParent(_scene)
// const transform1 = new Transform({
//   position: new Vector3(2.85,0.93,8.54),
//   rotation: Quaternion.Euler(0,90,0),
//   scale: new Vector3(0.4, 0.4, 0.4)
// })
// suit.addComponentOrReplace(transform1)

// const jacket = new Entity('jacket')
// engine.addEntity(jacket)
// jacket.setParent(_scene)
// const transform2 = new Transform({
//   position: new Vector3(7.29,0.93,9),
//   rotation: Quaternion.Euler(0,0,0),
//   scale: new Vector3(0.4, 0.4, 0.4)
// })
// suit.addComponentOrReplace(transform2)



// const channelId = Math.random().toString(16).slice(2)
// const channelBus = new MessageBus()
// const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
// const options = { inventory }

// const script1 = new Script1()
// script1.init()
// script1.spawn(suit, {"image":"https://bafybeiegpazlbhaqw7mrl4eqnahxip5bqh4ppf6mm3d7zity23ujgvnjdi.ipfs.dweb.link/avtarSuitQR.png"}, createChannel(channelId, suit, channelBus))
// script1.spawn(jacket,{"image":""},createChannel(channelId,jacket,channelBus))

// const a = new Entity()
// a.addComponent(new GLTFShape("models/wearables/mens_two_piece_suit/scene.gltf"))
// a.addComponent(new Transform({
//   position:new Vector3(-5.48,0.88,25.82),
//   rotation:Quaternion.Euler(0,0,0),
//   scale:new Vector3(1,1,1)
// }))
// engine.addEntity(a)
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
  position: new Vector3(13.11,1.04,5.60),
  rotation: Quaternion.Euler(0, 90, 0,),
  scale: new Vector3(0.4,0.4,0.4)
})
imageFromURL5.addComponentOrReplace(transform10)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(8, 5.14663, 14.40),
  rotation: Quaternion.Euler(0, 0, 0,),
  scale: new Vector3(5.5,1.5,0.4)
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
script1.spawn(imageFromURL5, {"image":"https://bafybeiegpazlbhaqw7mrl4eqnahxip5bqh4ppf6mm3d7zity23ujgvnjdi.ipfs.dweb.link/avtarSuitQR.png"}, createChannel(channelId, imageFromURL5, channelBus))
script1.spawn(imageFromURL6, {"image":"https://bafybeiavauicvjx5gfd7jaijhovjgo6jk7gmszd7r73iog357ioqsdnplq.ipfs.dweb.link/1600858456_HulSrV_Flipkart.jpg"}, createChannel(channelId, imageFromURL6, channelBus))



