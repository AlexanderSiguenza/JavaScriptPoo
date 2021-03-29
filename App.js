class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

// DOM Events-> Document Object Model 
class UI {

    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
           <div class="card text-center mb-4">
             <div class="card-body">
               <strong>Product Name</strong> :${product.name}
               <strong>Product Price</strong> :${product.price}
               <strong>Product Year</strong> :${product.year}
               <a href="#" class="btn btn-danger" name="delete">Delete</a>
             </div>
           </div>
       `;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name == 'delete') {
            element.parentElement.parentElement.parentElement.remove();
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));

        // Show in The DOM
        const container = document.getElementById('container'); 
        const app = document.getElementById('App');

        // Insert Message in the UI
        container.insertBefore(div, app);

        // Remove the Message after 3 seconds
        setTimeout(function () {
            document.querySelector(".alert").remove();
        }, 3000);
    }

}

document.getElementById('product-form')
    .addEventListener('submit', function (event) {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;
        const product = new Product(name, price, year);
        const ui = new UI();
        ui.addProduct(product);
        ui.resetForm();
        //ui.showMessage("Product Added Successfully", "success");     
        event.preventDefault();
    })

document.getElementById('product-list')
    .addEventListener('click', function (event) {
        console.log(event.target);
        const ui = new UI();
        ui.deleteProduct(event.target);
        event.preventDefault();
    })