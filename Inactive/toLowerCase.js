var toLowerCase = function(stringToChange){
  var lowerString = [];
  for(var i =0 ; i < stringToChange.length; i++){
    switch(stringToChange.charAt(i)) {
      case 'A':
        lowerString.push("a");
        break;
      case 'B':
        lowerString.push("b");
        break;
      case 'C':
        lowerString.push("c");
        break;
      case 'D':
        lowerString.push("d");
        break;
      case 'E':
        lowerString.push("e");
        break;
      case 'F':
        lowerString.push("f");
        break;
      case 'G':
        lowerString.push("g");
        break;
      case 'H':
        lowerString.push("h");
        break;
      case 'I':
        lowerString.push("i");
        break;
      case 'J':
        lowerString.push("j");
        break;
      case 'K':
        lowerString.push("k");
        break;
      case 'L':
        lowerString.push("l");
        break;
      case 'M':
        lowerString.push("m");
        break;
      case 'N':
        lowerString.push("n");
        break;
      case 'O':
        lowerString.push("o");
        break;
      case 'P':
        lowerString.push("p");
        break;
      case 'Q':
        lowerString.push("q");
        break;
      case 'R':
        lowerString.push("r");
        break;
      case 'S':
        lowerString.push("s");
        break;
      case 'T':
        lowerString.push("t");
        break;
      case 'U':
        lowerString.push("u");
        break;
      case 'V':
        lowerString.push("v");
        break;
      case 'W':
        lowerString.push("W");
        break;
      case 'X':
        lowerString.push("x");
        break;
      case 'Y':
        lowerString.push("y");
        break;
      case 'Z':
        lowerString.push("z");
        break;
      default:
        lowerString.push(stringToChange.charAt(i));
      }
    }
  return lowerString.join();
}
module.exports = toLowerCase;
