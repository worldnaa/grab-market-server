const express = require('express'); //설치한 express 모듈 불러오기
const cors = require('cors'); //CORS(Cross Origin Resource Sharing)이슈를 막기 위해 사용하는 cors 패키지 불러오기
const app = express();
const port = 8080;

app.use(express.json()); //클라이언트가 json 형식으로 데이터를 보냈을 때 처리할 수 있게 설정
app.use(cors()); //브라우저의 CORS 이슈를 막기 위해 사용 (모든 브라우저에서 내 서버로 요청 가능)

//"/products" 경로로 get 요청이 오면 실행된다
app.get("/products", (req, res) => {
  //GET 요청은 query를 통해서만 데이터를 전달받을 수 있습니다
  const query = req.query;
  console.log('QUERY : ', query);
  
  res.send({    
    "products" : [
        {
            "id" : 1,
          "name": "농구공",
          "price": 100000,
          "seller": "조던",
          "imageUrl": "images/products/basketball1.jpeg"
        },
        {
            "id": 2,
          "name": "축구공",
          "price": 50000,
          "seller": "메시",
          "imageUrl": "images/products/soccerball1.jpg"
        },
        {
            "id" : 3,
          "name": "키보드",
          "price": 10000,
          "seller": "그랩",
          "imageUrl": "images/products/keyboard1.jpg"
        }
    ]
  });
})

//"/products" 경로로 post 요청이 오면 실행된다
app.post("/products", (req, res) => {
  //클라이언트에서 POST 요청을 할 때 Body에 데이터를 담을 수 있다
  //이때 express 서버에서는 req.body 로 값을 접근할 수 있다
  const body = req.body; 
	console.log(body.articles) 
  
  res.send({
    body, //key와 value가 같으면 value 생략 가능
  });
})

app.get("/products/:id/events/:eventId", (req, res) => {
  const params = req.params;
  const {id, eventId} = params;
  res.send(`id는 ${id}와 ${eventId}입니다`);
})

//위에서 설정한 port로 요청이 오길 기다린다 (셋팅한 app을 실행시킨다)
app.listen(port, () => {
  console.log("그랩의 쇼핑몰 서버가 돌아가고 있습니다");
})