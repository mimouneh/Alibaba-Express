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


        { name: 'Samsung TV', price: 1500, id: 1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=0', category: 'Elektronik' },
        { name: 'Camera', price: 755, id: 2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=30', category: 'Elektronik' },
        { name: 'Shampoo', price: 25, id: 3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=100', category: 'Hemmet' },
        { name: 'Tandborste', price: 20, id: 4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=20', category: 'Hemmet' },
        { name: 'Kontor Stol', price: 800, id: 5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=10', category: 'Kontor' },
        { name: 'Skrivbord', price: 2000, id: 6, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=400', category: 'Kontor' }
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