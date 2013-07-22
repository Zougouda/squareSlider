function loadLevel(level)
{
var arrayLevel = level.split("\n");

finalWidth = 0, finalHeight = 0;
playerX = 0, playerY = 0;

widthByCharacter = 20;
heightByCharacter = 20;
platformsFromLoad = [], badGuysFromLoad = [],  currentPlatform = null;

var lineNumber = 0, charNumber = 0;

arrayLevel.forEach(function(line){
    var arrayLine = line.split("");
    arrayLine.forEach(function(character){
        if(lineNumber == 0) // if first line
    {
        finalWidth += widthByCharacter;
    }
    if(charNumber == 0) // if first char
    {
        finalHeight += heightByCharacter;
    }

    switch(character)
    {
        case "#":
            if(currentPlatform != null)
            {
                currentPlatform.width += widthByCharacter;
            }
            else
                currentPlatform = new Platform(charNumber*widthByCharacter, lineNumber*heightByCharacter, widthByCharacter, heightByCharacter, 50);
            break;

        case "x":
            playerX = charNumber*widthByCharacter;
            playerY = lineNumber*heightByCharacter;
            break;

        case "B":           
            badGuy = new BadGuy(charNumber*widthByCharacter, lineNumber*heightByCharacter, 10, 10, 200);
            badGuysFromLoad.push(badGuy);
            break;

        case ">":
            if(currentPlatform != null)
            {
                currentPlatform.width += widthByCharacter;
            }
            else
            {
                currentPlatform = new Platform(charNumber*widthByCharacter, lineNumber*heightByCharacter, widthByCharacter, heightByCharacter, 50);
                currentPlatform.behaviour = {x: 1, y: 0};
            }
            break;

        case "<":
             if(currentPlatform != null)
            {
                currentPlatform.width += widthByCharacter;
            }
            else
            {
                currentPlatform = new Platform(charNumber*widthByCharacter, lineNumber*heightByCharacter, widthByCharacter, heightByCharacter, 50);
                currentPlatform.behaviour = {x: -1, y: 0};
            }
            break;


        default:
            if(currentPlatform != null)
            {
                platformsFromLoad.push(currentPlatform);
                currentPlatform = null;
            }
    }

    charNumber++;
    });
    lineNumber++;
    charNumber = 0;
});

console.log(finalWidth, finalHeight);
}
