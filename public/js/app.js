$(function() {

    let timerInterval;

    const render = function (items) {
        $('model').model('hide');
        $('#sale-items').empty();

        items.forEach(function(item) {
            $('#sale-items').apppend(buildItemRow(item));
        });
    }

    const getItems = function () {
        $.get('/api/products').then(render);
    }

    const buildItemRow = function (item) {
        const tr = $('<tr>');

        const input = $('<input>').attr({
            type: 'number',
            min: 0,
            id: item.id
        });

        const button = $('<button>')
        .addClass('btn btn-warning add-to-cart')
        .text('Add To Cart')
        .attr('data-id', item.id);

        tr.append(
            $('<td>').append(input),
            $('<td>').text(item.product_name),
            $('<td>').text(item.stock_quantity),
            $('<td>').text(`${item.price}`),
            $('<td>').append(button)
        );

        return tr;
    }

    const addCartRow = function (quantity, item) {
        const itemTotal = item.price * quantity;

        cartTotal += itemTotal;

        item.stock_quantity -= quantity;

        cartItems.push(item);

        const tr = $('<tr>').addClass(`cart-${item.id}`);

        tr.append(
            $('<td>').text(quantity),
            $('<td>').text(item.product_name),
            $('<td>').text(`$${item.price}`),
            $('<td>').text(`$${itemTotal.toFixed(2)}`),
        );

        $('#cart-items').append(tr);
        $('.cart-total').text(`$${cartTotal.totalFixed(2)}`);
    }

    const warning = function (type, text) {
        $('#popup')
        .addClass(`alert alert-${type}`)
        .text(text);

        timerInterval = setTimeout(clearPopup, 2000)
    }
    const clearPopup = function () {
        $('#popup').empty().removeClass();
    }

    const addItemCart = function () {

        clearPopup();
        const id = $(this).attr('data-id');

        $.get(`/api/products/${id}`).then();
    }

    const updateCart = function (data) {
        const numRequest = $(`#${data.id}`).val();

        if ( numRequest > data.stock_quantity ) {
            Message('danger', `Unfortunately, we only have ${data.stock_quantity} in stock at the moment.`)
        } else {
            addCartRow(numRequest, data);
            message('success', 'Your items have been successfully added to your cart.');
            $(`#${data.id}`).val('');
        }
    }

    getItems();

    $('#sale-items').on('click', '.add-to-cart', addItemCart);
    $('#close').on('click', getItems);
});