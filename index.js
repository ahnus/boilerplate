const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ahnus:qhfltkfkd1@boilerplate.fwc0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('방가방가 하이루')
})

app.post('/register', (req, res) => {
  // 회원가입 시 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 삽입

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false. err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})