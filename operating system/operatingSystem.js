function fixFiles(files) {
    // ¡No olvides compartir tu solución en redes!
    for (let i=0 ; i < files.length ; i++){
        let contadorj = 0;
        for (let j = i+1 ; j <= files.length ; j++){
            if(files[i] === files[j]){
                contadorj++
                files[j] = files[j] + '(' + contadorj + ')';
            }
        }
    }
    return files
}