var http = require("http");  //모듈을 불러올 때 require를 사용한다
var hostname = "127.0.0.1";  //내 컴퓨터 내부 IP주소
var port = 8080;

//http.createServer() : 서버를 만드는 명령어
//서버에 어떤 요청이 오든 아래 콜백 함수를 실행한다
const server = http.createServer(function(req, res){
  console.log("Request ==> ", req);
  const path = req.url;       //request 객체의 url이라는 값을 가져온다
  const method = req.method;  //request 객체의 메소드 가져오기

  if(path === "/products") {
    if(method === "GET") {
      //정상적으로 요청했을 때 헤드에 상태번호 200과 json 형식의 응답을 보낸다 
      res.writeHead(200, {"Content-Type": "application/json"});
      //JSON.stringify : 배열 형태를 String 형태로 바꿔준다
      const products = JSON.stringify([
        {
          name: "농구공",
          price: 5000,
        },
      ]);
      res.end(products); //node.js의 end 함수 첫번째 인자로는 String이 들어가야 한다
    } 
    else if(method === "POST") {
      res.end("생성되었습니다!");
    }
  }  
  res.end("Good Bye");
});

server.listen(port, hostname); //위에서 설정한 port,hostname으로 요청을 기다리고 있겠다

console.log("grab market server on!");
