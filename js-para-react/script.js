// Arrow Function

// function Soma (a, b) {
//     return a + b
// }

// const Soma = (a, b) => {
//     return a + b
// }

// Destructuring

// function MouseMove(event){
//     const clientY = event.clientY
//     const clientX = event.clientX
//     console.log(clientX, clientY)
// }

// const MouseMoving = () => {
//     const {clientX, clientY} = event
//     console.log(clientX, clientY)
// }

// const MouseHandle = ({clientX, clientY}) => {
//     console.log(clientX, clientY)
// }

// document.documentElement.addEventListener('mousemove', MouseMove);

//Arrays 

// const frutas = ['banana', 'maçã', 'pera']

// const[banana, maca] = frutas

//Rest 

// const showList = (empresa, ...funcionarios) => {
//     funcionarios.forEach((funcionario) =>{
//         console.log(funcionario, empresa)
//     })
    

// }

// showList('Senai', 'Carlos', 'Bruno', 'Leticia')

//Spread

// const numeros = [12, 12, 21, 30, 4, 6]

// const maior = Math.max(...numeros)

// const carro = {
//     cor: 'prata',
//     modelo: 'Ka',
//     ano: 2008,
// }

// const marcaCarro = {...carro, marca: 'Ford'}

// console.log({marcaCarro})

//Arrays maps e filter

// const compras = [
//     'R$ 200',
//     '150',
//     'R$ 550',
//     'R$ 300',
//     '650',
//     'Shampoo',
//     'Creme de gato',
// ]

// const precosFiltro = compras.filter((preco)=>
//     (preco.includes(0)))

// const precosNumeros = precosFiltro.map((precos) =>Number (precos.replace('R$', '')))

// console.log(precosNumeros)

//Operadores ternários

// const csa = 2
// const crb = 89

// const vencedor = crb > csa ? 'CRB venceu' : 'CSA venceu'

// const situacaoAtiva = true
// const mensagem = situacaoAtiva && 'Situação Ativa'

// console.log(mensagem)