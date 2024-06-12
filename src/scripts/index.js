document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    function renderProducts(productsToRender) {
        productList.innerHTML = "";
        productsToRender.forEach(product => {
            const productElement = document.createElement("div");
            productElement.className = "product";
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.description}</p>
                <del>de R$ 582,00</del>
                <h3>R$ ${product.price.toFixed(2)}</h3>
                <p><span>5x</span> de <span>R$ 47,68</span> sem juros</p>
                <button>Adicionar ao carrinho</button>
            `;
            productList.appendChild(productElement);
        });
    }

    function filterProducts(searchTerm) {
        return products.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    searchButton.addEventListener("click", function() {
        const searchTerm = searchInput.value;
        const filteredProducts = filterProducts(searchTerm);
        renderProducts(filteredProducts);
    });

    renderProducts(products);
});