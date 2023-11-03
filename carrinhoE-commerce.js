const carrinho = {
    nomeDoCliente: 'Hugo Laurentino',
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 1,
            precoUnit: 5000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 4,
            precoUnit: 5000
        }
    ],

    addProduto: function (produto) {
        let numera = 0
        for (const verificar of this.produtos) {
            if (verificar.id === produto.id) {
                numera++, verificar.qtd += produto.qtd
            }
        }
        numera === 0 ? this.produtos.push(produto) : ''
    },

    calcularTotalDeItens: function () {
        let itens = 0
        for (const compras of this.produtos) {
            itens += compras.qtd
        }
        return itens
    },

    calcularTotalAPagar: function () {
        let pagar = 0
        for (const compras of this.produtos) {
            pagar += compras.qtd * compras.precoUnit
        }
        return (pagar / 100).toFixed(2)
    },

    calcularDesconto: function () {
        let preso = (this.produtos[0].precoUnit / 100).toFixed(2)
        for (let Item = 0; Item < this.produtos.length; Item++) {
            this.produtos[Item].precoUnit < preso ? preso = this.produtos[Item].precoUnit : ''
        }

        let descontoItem = preso
        let descontoPagar = (this.calcularTotalAPagar() * 10 / 100).toFixed(2)
        let desconto = 0

        if (this.calcularTotalDeItens() > 4 && this.calcularTotalAPagar() > 100) {
            if (descontoItem > descontoPagar) {
                return (desconto = this.calcularTotalAPagar() - descontoItem / 100).toFixed(2)
            } else {
                return (desconto = this.calcularTotalAPagar() - descontoPagar / 100).toFixed(2)
            }
        }

        if (this.calcularTotalDeItens() > 4) {
            return desconto = (this.calcularTotalAPagar() - descontoItem / 100).toFixed(2)
        }

        if (this.calcularTotalAPagar() > 100) {
            return desconto = (this.calcularTotalAPagar() - descontoPagar / 100).toFixed(2)
        }

        return desconto = (this.calcularTotalAPagar() / 100).toFixed(2)

    },

    detalharItens: function () {
        for (let Item = 0; Item < this.produtos.length; Item++) {
            console.log(`        Item ${Item + 1} - ${this.produtos[Item].nome} - ${this.produtos[Item].qtd} und - R$ ${(this.produtos[Item].precoUnit / 100).toFixed(2)} `);
        }
    },

    imprimirDetalhes: function () {
        console.log(`
        Cliente: ${this.nomeDoCliente}        
        `)

        this.detalharItens()

        console.log(`
        Total de itens: ${this.calcularTotalDeItens()} itens
        Total a pagar: R$ ${this.calcularDesconto()}
        `)
    },

    imprimirResumo: function () {
        console.log(`
    Cliente: ${this.nomeDoCliente}
    Total de itens: ${this.calcularTotalDeItens()} itens
    Total a pagar: ${this.calcularTotalAPagar()}
    `);
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 10,
    precoUnit: 10000
}

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
carrinho.imprimirDetalhes(novoTenis);
