document.addEventListener('DOMContentLoaded', () => {
    // Estrutura inicial de produtos em JSON
    let products = [
        {
            "id": 1,
            "name": "coxinhas fritas",
            "description": "coxinhas de frango fritas.",
            "price": "R$ 100,00",
            "image": "images/coxinha frita.jpg"
        },
        {
            "id": 2,
            "name": "assinhas fritas",
            "description": "assinhas de frango fritas.",
            "price": "R$ 150,00",
            "image": "images/assinhas.jpg"
        },
        {
            "id": 3,
            "name": "filé frito",
            "description": "peito de frango frito.",
            "price": "R$ 200,00",
            "image": "images/filé frito.jpg"
        },
        {
            "id": 4,
            "name": "coraçãozinho de frango",
            "description": "coração de frango tamanho familia.",
            "price": "R$ 250,00",
            "image": "images/coracao.jpg"
        },
       
    ];

    // Seleciona o contêiner da lista de produtos
    const productList = document.getElementById('product-list');

    // Função para renderizar a lista de produtos
    function renderProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
                <button onclick="deleteProduct(${product.id})">excluir</button>
            `;
            productList.appendChild(productDiv);
        });
    }

    // Função para deletar um produto
    window.deleteProduct = function(id) {
        products = products.filter(product => product.id !== id);
        renderProducts();
    }

    // Função para adicionar um produto
    function addProduct() {
        const nameInput = document.getElementById('product-name');
        const priceInput = document.getElementById('product-price');
        const descriptionInput = document.getElementById('product-description');
        const imageInput = document.getElementById('product-image');

        const newName = nameInput.value.trim();
        const newPrice = priceInput.value.trim();
        const newDescription = descriptionInput.value.trim();
        const newImageFile = imageInput.files[0];

        if (newName === '' || newPrice === '' || newDescription === '' || !newImageFile) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            const newId = products.length ? products[products.length - 1].id + 1 : 1;
            const newProduct = {
                id: newId,
                name: newName,
                description: newDescription,
                price: newPrice,
                image: event.target.result
            };

            products.push(newProduct);
            renderProducts();

            // Limpar os campos de entrada
            nameInput.value = '';
            priceInput.value = '';
            descriptionInput.value = '';
            imageInput.value = '';
        };
        reader.readAsDataURL(newImageFile);
    }

    // Adiciona evento ao botão de adicionar produto
    document.getElementById('add-product-btn').addEventListener('click', addProduct);

    // Renderiza os produtos iniciais
    renderProducts();
});
