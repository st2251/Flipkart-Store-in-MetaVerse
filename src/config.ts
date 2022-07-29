import { KeepRotatingComponent, RotateTransformComponent } from "@dcl/ecs-scene-utils";

export default {
    //SCENE FACING: "NORTH"/"EAST"/"SOUTH"/"WEST"
    sceneOrientation: "NORTH",
    logo: {
        bottom: {
            //image should be 512px square
            imgSrc: "images/logo.png",
            position: new Vector3(6.96862, 5.72577, 7.34845)
        },
        top: {
            name: "Flipkart",
            fontSize: 6,
            color: new Color3(0.1, 0.1, 0.1),
            position: new Vector3(0, 5.84663, 6.39477)
        }
    },
    socialMedia: [
        {
            name: "HOMEPAGE",
            model: "models/social_media/homepage.glb",
            link: "https://www.flipkart.com/",
            position: new Vector3(1.5, 1.3, -5.35)
        },
        {
            name: "DISCORD",
            model: "models/social_media/discord.glb",
            link: "https://www.discord.org",
            position: new Vector3(0.5, 1.3, -5.35)
        },
        {
            name: "TWITTER",
            model: "models/social_media/twitter.glb",
            link: "https://twitter.com/Flipkart?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            position: new Vector3(-0.5, 1.3, -5.35)
        },
        {
            name: "TELEGRAM",
            model: "models/social_media/telegram.glb",
            link: "https://www.telegram.org",
            position: new Vector3(-1.5, 1.3, -5.35)
        }
    ],
    videoScreen: {
        src: "https://bafybeid5ll3dkfhnkkbqdujf7iqxyuslnhlf23jzjcjbbo6nwm54mtgije.ipfs.dweb.link/flipkart.mp4",
        width: 1280,
        height: 720
    },
    wearable: [
        {
            name: "Razor Blade Jacket",
            model: "models/wearables/1.glb",
            link: "https://www.flipkart.com/search?q=men%20jackets&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off",
            position: new Vector3(4.2, -0.1, 5.1),
            rotation: Quaternion.Euler(0,0,0),
            scale: new Vector3(1.1, 1.1, 1.1)
        },
        {
            name: "DCL Logo Hoddie",
            model: "models/wearables/2.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(-4.2, -0.1, 5.1),
            rotation: Quaternion.Euler(0, 0, 0),
            scale: new Vector3(1.1, 1.1, 1.1)
        },
        {
            name: "Aviator",
            model: "models/wearables/aviator/scene.gltf",
            link: "https://www.flipkart.com/search?q=aviator&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off",
            position: new Vector3(5.1, 2, -3.2),
            rotation: Quaternion.Euler(0, -45, 0),
            scale: new Vector3(0.4,0.4,0.4)
        },
        {
            name: "Over9000", 
            model: "models/wearables/4.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(-5.1, -1, -3.3),
            rotation: Quaternion.Euler(0, 90, 0),
            scale: new Vector3(1.1, 1.1, 1.1)
        },
        {
            name: "Women Dress",
            model: "models/wearables/leather_jacket/scene.gltf",
            link: "https://market.decentraland.org/",
            position: new Vector3(0, 1.5, 0.7),
            rotation: Quaternion.Euler(0, 0, 0),
            scale: new Vector3(1.1, 1.1, 1.1)
        },
        {
            name: "CitySneakers",
            model: "models/wearables/6.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(1, 0.7, -0.7),
            rotation: Quaternion.Euler(0, 45, 0),
            scale: new Vector3(1.1, 1.1, 1.1)
        },
        {
            name: "Rollers",
            model: "models/wearables/7.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(-1, 0.7, -0.7),
            rotation: Quaternion.Euler(0, -45, 0),
            scale: new Vector3(1.1, 1.1, 1.1)
        },
        {
            name: "Suit",
            model:"models/wearables/mens_two_piece_suit/scene.gltf",
            link: "https://www.flipkart.com/search?q=men%20suit&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off",
            position:new Vector3(-4.93,0.5,0.14),
            rotation : Quaternion.Euler(0,90,0),
            scale: new Vector3(1.1, 1.1, 1.1)
        },
    ]
}