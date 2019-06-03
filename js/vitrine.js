
function X(myObj) {
    var len = myObj.data.widget.size;
    var produtos= '';
    var precoAntigo = '';
    var pagamento = '';

    //Para aparecer os R$ antes nas condições de pagamento.
    split = myObj.data.reference.item.productInfo.paymentConditions.split("de");
    split[1] = ' de R$' +  split[1];
    var pagamentoReferencia = split.join("");

    // O produto de referência
    var referencia = '<img src = "https://' + myObj.data.reference.item.imageName+'"/> <br>' +
        myObj.data.reference.item.name + '<br> \n' +
        '<span style="display: block; font-size: 12px; text-decoration: line-through">De: ' + myObj.data.reference.item.oldPrice + '</span> \n'+
        '<span style="display: block; font-weight: bold; color: green">Por:' + myObj.data.reference.item.price + '<br> \n' +
        pagamentoReferencia + '</span>'

    //Para pegar o Array das recomendações
    for(var i=0; i<len; i++){

        //Para aparecer o R$ antes nas condições de pagamento
        split = myObj.data.recommendation[i].productInfo.paymentConditions.split("de");
        split[1] = ' de R$' +  split[1];
        pagamento = split.join("");

        // Caso não tiver valor anterior
        if(myObj.data.recommendation[i].oldPrice != null){
            precoAntigo = 'De:' +  myObj.data.recommendation[i].oldPrice + '<br>'
        }else {
            precoAntigo = '';
        }

        // Os itens das recomendações
        produtos += '<li class="produto_lista_item">\n' +
            '<div data-slide="'+i+'" class="produto">\n' +
            '<span>\n'+
            '<img src = "https://' + myObj.data.recommendation[i].imageName+'"/> <br>' +
            myObj.data.recommendation[i].name + '<br>' +
            '<span style="display: block; font-size: 12px; text-decoration: line-through">'+precoAntigo + '</span>' +
            '<span style="display: block; font-weight: bold; color: green">Por: ' +myObj.data.recommendation[i].price + '<br>' +
            pagamento + ' sem juros</span>' +
            '</span>  </div> </li>'


    }
    document.getElementById('produtos').innerHTML = produtos;
    document.getElementById('referencia').innerHTML = referencia;
}