const jsonwebtoken = require('jsonwebtoken');

let user ={
    id: "abcd-101-sfsfd-2468976",
    name: "karthik",
    email: "karthik@gamil.com"

}

let payload ={
    id: user . id,
    name: user .name
}

let secretKey = 'ssshhh';

let token =jsonwebtoken.sign(payload , secretKey , {expiresIn:3600});
console.log(token);

jsonwebtoken.verify(token , secretKey, (err, decoded)=>{
     if (err) throw err;
     console.log(decoded)
});