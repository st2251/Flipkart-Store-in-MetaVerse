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
            name: "BRAND\nNAME",
            fontSize: 6,
            color: new Color3(0.1, 0.1, 0.1),
            position: new Vector3(0, 5.84663, 6.39477)
        }
    },
    socialMedia: [
        {
            name: "HOMEPAGE",
            model: "models/social_media/homepage.glb",
            link: "https://www.decentraland.org",
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
            link: "https://www.twitter.com",
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
        src: "https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875",
        width: 1280,
        height: 720
    },
    wearable: [
        {
            name: "Razor Blade Jacket",
            model: "models/wearables/1.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(4.2, -0.1, 5.1),
            rotation: Quaternion.Euler(0, 0, 0)
        },
        {
            name: "DCL Logo Hoddie",
            model: "models/wearables/2.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(-4.2, -0.1, 5.1),
            rotation: Quaternion.Euler(0, 0, 0)
        },
        {
            name: "Aviator",
            model: "models/wearables/3.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(5.1, -1, -3.3),
            rotation: Quaternion.Euler(0, -90, 0)
        },
        {
            name: "Over9000", 
            model: "models/wearables/4.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(-5.1, -1, -3.3),
            rotation: Quaternion.Euler(0, 90, 0)
        },
        {
            name: "Launch TShirt",
            model: "models/wearables/5.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(0, -0.1, 0.7),
            rotation: Quaternion.Euler(0, 0, 0)
        },
        {
            name: "CitySneakers",
            model: "models/wearables/6.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(1, 0.7, -0.7),
            rotation: Quaternion.Euler(0, 45, 0)
        },
        {
            name: "Rollers",
            model: "models/wearables/7.glb",
            link: "https://market.decentraland.org/",
            position: new Vector3(-1, 0.7, -0.7),
            rotation: Quaternion.Euler(0, -45, 0)
        },
    ]
}