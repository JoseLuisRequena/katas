function wrapGifts(gifts) {
    // ¡No olvides compartir tu solución en redes!
    if(gifts.length){
        if(gifts[0].length < 4){
            gifts = gifts.map(item => "*" + item + "*");
            gifts.splice(0, 0 , "****");
            gifts.splice(gifts.length, 0 , "****");
            return gifts;
        } else {
            gifts.splice(0, 0 , "****");
            gifts.splice(gifts.length, 0 , "****");
            gifts = gifts.map(item => "*" + item + "*");
            return gifts;
        }
    } else {
        return gifts;
    };
};
wrapGifts([])
/* Resultado:
[]
*/

wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/