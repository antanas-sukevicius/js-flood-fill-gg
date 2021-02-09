class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    colour(picture) {
        return picture[this.y][this.x];
    }
    setColour(image, colour) {
        image[this.y][this.x] = colour
    }
}

picture = [
    [1, 4, 4, 4, 4, 1],
    [1, 4, 1, 4, 4, 4],
    [1, 4, 1, 4, 4, 3],
    [1, 4, 1, 1, 4, 2],
    [4, 4, 4, 4, 4, 4],
    [4, 2, 3, 4, 4, 2]]


// input
StartPoint = new Point(1, 1)
startPointColor = StartPoint.colour(picture);
fillColour = 0;

Xlimit = picture[0].length
Ylimit = picture.length
loopDirections = [[0, 1], [0, -1], [1, 0], [-1, 0]]

StartPoint.setColour(picture, fillColour)
queue = [StartPoint]

fillArea(queue)

function fillArea(queue) {

    point = queue[0]

    for (i = 0; i < loopDirections.length; i++) {
        x = point.x + loopDirections[i][0]
        y = point.y + loopDirections[i][1]

        if (validateBoarders(x, y)) {
            tmpPoint = new Point(x, y)

            if (checkPoint(tmpPoint)) {
                tmpPoint.setColour(picture, fillColour)
                queue.push(tmpPoint)
            }
        }
    }

    queue = queue.splice(1)

    if (queue.length == 0) { return 0 }

    fillArea(queue)

}

function checkPoint(tmpPoint) {
    if (tmpPoint.colour(picture) == startPointColor) return true
    return false
}

function validateBoarders(x, y) {
    if (x < 0 || x > Xlimit - 1) return false
    if (y < 0 || y > Ylimit - 1) return false
    return true
}


console.table(picture)