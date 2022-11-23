function decodeNumber(symbols) {
    // ¡No olvides compartir tu solución en redes!
    let numberList = [];
    for( let leter of symbols ){
        switch (leter) {
            case '.':
                numberList.push(1);
                break;
            case ",":
                numberList.push(5);
                break;
            case ":":
                numberList.push(10);
                break;
            case ";":
                numberList.push(50);
                break;
            case "!":
                numberList.push(100);
                break;
            default:
                numberList.push(NaN);
                break;
        }
    }
    for( let i = 0 ; i < numberList.length ; i++ ){
        if(numberList[i]<numberList[i+1]){
            numberList[i] = -numberList[i];
        }
    }
    if(numberList.includes(NaN)){
        return NaN
    } else {
        const initialValue = 0;
        const sumNumberList = numberList
            .reduce(
            (previousValue, currentValue) => previousValue + currentValue, initialValue)
        return sumNumberList
    }
}

//test data
decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN