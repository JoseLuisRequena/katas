function decodeNumber(symbols) {
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
            .reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
        return sumNumberList
    }

}

//test data
decodeNumber('...') // 3
decodeNumber('.,') // 4 (5 - 1)
decodeNumber(',.') // 6 (5 + 1)
decodeNumber(',...') // 8 (5 + 3)
decodeNumber('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumber('.;') // 49 (50 - 1)
decodeNumber('..,') // 5 (-1 + 1 + 5)
decodeNumber('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumber('.;!') // 49 (-1 -50 + 100)
decodeNumber('!!!') // 300
decodeNumber(';!') // 50
decodeNumber(';.W') // NaN