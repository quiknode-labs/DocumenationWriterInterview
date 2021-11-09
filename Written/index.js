import express from "express";

const app = express()

const port = 3000

const transactions = [{
    id: 1,
    amount: 25.00,
    to: 'joe'
}]

app.use(express.json())

app.get('/', (req, res) => {
    res.send(transactions)
})

app.post('/', (req, res) => {
    const transaction = req.body
    transactions.push(transaction)
    res.send(`successfully added transaction #: ${transaction.id}, in the amount of ${transaction.amount} to: ${transaction.to}`)
    res.end()
})

app.delete('/', (req, res) => {
    const transaction = req.body
    console.log(transaction)
    const transactionIndex = transactions.findIndex(item => item.id == transaction.id)
    if (transactionIndex === -1) {
        res.send("no transaction with that id exists")
        return
    }
    console.log(transactionIndex)
    
    transactions.splice(transactionIndex, 1)
    res.send(`sucessfully deleted transaction #: ${transaction.id}}}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});