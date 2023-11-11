function order(product, count) {
    const products = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00,
    };

    const currentProduct = products[product];
    const totalPrice = (currentProduct * count).toFixed(2);
    console.log(totalPrice);
}

order("water", 5);
order("coffee", 2);