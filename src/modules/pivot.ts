import config from "../config"

export const pivotScene = new Entity()


export function setSceneOrientation() {
    let yRotation = 0

    switch (config.sceneOrientation) {
        case "NORTH":
            yRotation = 0
            break

        case "EAST":
            yRotation = 90
            break

        case "WEST":
            yRotation = -90
            break

        case "SOUTH":
            yRotation = 180
            break
    }

    pivotScene.addComponent(new Transform({
        position: new Vector3(8, 0, 8),
        rotation: Quaternion.Euler(0, yRotation, 0)
    }))
    engine.addEntity(pivotScene)
}
