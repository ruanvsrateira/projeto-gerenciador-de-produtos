class Product {
    constructor() {
        this.id = 1;
    }

    insertToPage(product) {
        const tableBody = document.querySelector("table tbody")
        const tableItem = document.createElement("tr")
        tableItem.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <img src="assets/trash-icon.png" alt="trash icon" onclick="product.delete(event)" />
            </td>
        `

        tableBody.appendChild(tableItem)

    }

    create() {
        const product = this.readData()
        
        if(this.validateData(product)) {
            this.insertToPage(product)
            this.id ++;
        } else {
            return;
        }
    }

    delete(event) {
        event.target.parentNode.parentNode.remove()
    }

    readData() {
        const product = {
            id: this.id,
            name: document.querySelector("#product-name").value,
            price: document.querySelector("#product-price").value
        }
    
        return product
    }

    validateData(product) {
        let msg = "";

        if(!product.name) {
            msg += "É preciso inserir o nome do produto"
        }

        
        if(!product.price) {
            msg += "É preciso inserir o preço do produto"
        }

        if(msg !== "") {
            alert(msg)
            return false
        }

        return true
    }

}

function clearInputs() {

    const inputs = document.querySelectorAll(`input[type="text"]`)

    for(const input of inputs) {
        input.value = ""
    }

}

const product = new Product()