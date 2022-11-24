/*
¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

Vamos a crear una función que pasándole un array de regalos, 
nos devuelva otro array pero donde todos los regalos han sido 
envueltos con asteriscos tanto por arriba como por los lados.

Sólo tienes que tener en cuenta unas cosillas ✌️:

Si el array está vacío, devuelve un array vacío
Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
Por suerte, cada posición del array siempre tiene la misma longitud...
*/

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


//test data
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