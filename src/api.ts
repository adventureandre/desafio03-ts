const conta = {
    email: 'andre@luiz',
    password: '123456',
    name: 'Andre Luiz',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
