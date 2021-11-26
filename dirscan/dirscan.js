function userInfo(suburl) {
const url = location.origin + '/' + suburl;
return fetch(url).then( (res) => { return res; } );
}

async function sumOfFetch(array) {

const user = await userInfo(array);
if (user.status === 200) {
console.log(user)
}
}

const item = ['123','124','125']

let i = 1;
let timer = setInterval(function(){

  if(i>item.length){
    clearInterval(timer);
  }else{
    sumOfFetch(item[i-1]);
    i++;
  }

}, 1500)
