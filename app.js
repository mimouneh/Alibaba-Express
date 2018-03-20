var name= prompt('Mimouneh Kadro ');
alert('Welcome '+ name +' to my site');

$(function() {
    
$('#background').on('click',function() {
    var color1 = $('.color1').val();
    $('body').css('background-color',color1);
});

$('.text').on('click',function() {
    var color2 = $('.color2').val();
    $('p').css('color',color2);
});
$('.none').on('click',function() {
    
    $('.do').toggleClass('hidden');
});

$('.divRemove').on('click',function() {
    
    $('.ta-bort-mig').remove();
});


});
$(function () {
    var products = [


        { name: 'iPhone 8  ', price: 8600, id: 1, description: 'iPhone 8 är utrustad med ett imponerande kamerasystem, med en uppdaterad sensor och snabbare autofokus. Det här för ännu bättre bilder och perfekta selfies. Mobilen är snabbare, har längre batteritid och den är sjävklart både damm- och vattentålig.', picture: 'https://picsum.photos/300/?image=0', category: 'Elektronik' },
        { name: 'Jacka', price: 499, id: 2, description: 'Tidsenlig jacka med dunliknande lätt vaddering. Dekorationsstickning i modernt snitt. Hel dragkedja, bröstficka samt frontfickor med YKK-dragkedjor. Foder i tilltalande och kontrasterande färger. Smal resår i nederkant och i ärmslut.', picture: 'https://picsum.photos/300/?image=30', category: 'Kläder' },
        { name: 'Boll', price: 75, id: 3, description: 'Leksaker, som ord använt i svenskan sedan 1729, från isländskans "leika", är de föremål som företrädesvis barn använder vid lek. Dessa är ofta pedagogiska', picture: 'https://picsum.photos/300/?image=100', category: 'Leksaker' },
        { name: 'Samsung Galaxy S8', price: 6790, id: 4, description: 'Jag gillade verkligen Galaxy S7 men saknade USB C och virtuella menyknappar samt möjlighet att ha bakåtpilen till vänster. Allt det är fixat med S8 som dessutom fått extrastor skärm och den läckraste designen någonsin.', picture: 'https://picsum.photos/300/?image=9', category: 'Telefoner' },
        { name: 'Simma', price: 900, id: 5, description: 'SIMMA.NU har kommit ut som en nyhetssida för simning - sedan den 1 maj år 2000. För att söka dagliga nyheter - gå in på Nyheter NOR resp. Nyheter SWE. Annat material som krönikor, statistik, historik mm hittar du under plus-menyerna..', picture: 'https://picsum.photos/300/?image=87', category: 'Sport' },
        { name: 'Shampoo', price: 298, id: 6, description: ' Att välja rätt schampo för din hårtyp är viktigt om du vill ha vackert hår som håller länge. Här kan du filtrera resultaten så du hittar rätt produkt oavsett om du behöver schampo för skadat, torrt, färgat, blekt eller någon annan typ av hår.', picture: 'https://picsum.photos/300/?image=109', category: 'Egen val' }
    
    ];

    
    var cart = [];

    var appendList = function (array, location) {
        var template = array.map(function (item, id) {
            return `<li class="product col-3">
                <img src="${item.picture}" alt="">
                <div class="product-content">
                <h4>${item.name} -
                    <span class="category">${item.category}</span> <small>${item.price}kr</small>
                 </h4>
                  <p>${item.description}</p>
                </div>
                <button type="button" id="${item.id}">Köp Nu</button>
            </li>`;
        });
        $(location).html(template);
    };

    var addToCart = function (array, id, location) {
        var a = array.find(function (i) {
            return i.id === id;

        });

        cart.push(a);
        console.log(cart);
        var item = `
        <li class="item" id="${a.id}">
            <h4>${a.name}</h4>
            <button type="button">X</button>
        </li>
        `;
        $('span.amount').text(cart.length);
        $(location).append(item);
    };

    var removeFromCart = function (array, removedItem) {
        array.splice(removedItem, 1);

    };

    var populateCart = function (array, location) {
        var item = `
        <li class="item" id="${array.id}">
            <h4>${array.name}</h4>
            <button type="button">X</button>
        </li>
        `;
        $('span.amount').text(array.length);
    };


    appendList(products, $('.product-list'));

    $('.product').on('click', 'button', function (event) {
        var id = $(this).attr('id');
        addToCart(products, +id, $('.cart-list'));
    });

    $('.cart-list').on('click', 'button', function (e) {
        var item = $(e.currentTarget).closest('li').remove();
        removeFromCart(cart, item);
        populateCart(cart, $('.cart-list'));
    });


});

