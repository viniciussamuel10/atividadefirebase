var dataRef = new Firebase('https://escola2022-3e379-default-rtdb.firebaseio.com');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'diciplinas') {

            var _itemsKey = Object.entries(valor);
    
            count++;
    
    
            for (const [key2, value2] of _itemsKey) {
    
                $("#tbDisciplinas tbody").append(
    
                    `<tr> +
        
                        <td>${value2.nome}</td> +

                        <td>${value2.cargahoraria}</td> +
    
                    </tr>`
    
                );
    
            }
        }


    }

});
