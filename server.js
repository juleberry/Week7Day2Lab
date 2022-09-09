const express = require('express')
const app = express()

// your routes go below here

// GREETINGS

app.get('/greetings/:name', (req, res) => {
  res.json({
    message: `Hello, ${req.params.name}! It's so great to see you!`
  })
})

// TIP CALCULATOR
app.get('/tip/:total/:tipPercentage', (req, res) => {
  let tipAmount = req.params.total * (req.params.tipPercentage / 100)
  res.json({
    tipAmount: `Your tip amount is ${tipAmount}.`
  })
})

// MAGIC 8 BALL
const answerResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:question', (req, res) => {
  let question = req.params.question
    let answer = Math.floor(Math.random() * answerResponses.length - 1)
  res.json({
    question: `Question: ${question} Answer: ${answerResponses[answer]}`
  })
})



 // ----- Do Not Delete This ------
app.listen(3000, () => {
  console.log('listening on port 3000')
})