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
    [1, 4, 4, 4],
    [1, 4, 1, 4],
    [4, 4, 4, 4],
    [4, 2, 3, 2]]


// input
StartPoint = new Point(3, 0)
startPointColor = StartPoint.colour(picture);
fillColour = 0;

Xlimit = picture[0].length
Ylimit = picture.length


StartPoint.setColour(picture, fillColour)

queue = [StartPoint]

a = getQueueItems(queue)



function getQueueItems(queue) {

    point = queue[0]

    x = point.x - 1
    y = point.y

    if (validateBoarders(x, y)) {
        tmpPoint = new Point(x, y)

        if (checkPoint(tmpPoint)) {
            tmpPoint.setColour(picture, fillColour)
            queue.push(tmpPoint)
        }
    }


    x = point.x + 1
    y = point.y

    if (validateBoarders(x, y)) {
        tmpPoint = new Point(x, y)


        if (checkPoint(tmpPoint)) {
            tmpPoint.setColour(picture, fillColour)
            queue.push(tmpPoint)
        }
    }

    x = point.x
    y = point.y - 1
    if (validateBoarders(x, y)) {
        tmpPoint = new Point(x, y)

        if (checkPoint(tmpPoint)) {
            tmpPoint.setColour(picture, fillColour)
            queue.push(tmpPoint)
        }
    }

    x = point.x
    y = point.y + 1
    if (validateBoarders(x, y)) {
        tmpPoint = new Point(x, y)

        if (checkPoint(tmpPoint)) {
            tmpPoint.setColour(picture, fillColour)
            queue.push(tmpPoint)
        }
    }

    queue = queue.splice(1)

    if (queue.length == 0) { return 0 }

    getQueueItems(queue)

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
//console.log(JSON.stringify(picture,null,2))