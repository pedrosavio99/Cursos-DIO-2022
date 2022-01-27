console.log('assicronicidade, promisses assyn e apis')

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBTN = document.getElementById('change-cat');
const catIMG = document.getElementById('cat');

const getCats = async() => {
   try{
    const data = await fetch(BASE_URL);
    const json = await data.json();
    return json.webpurl; //esse web purl é um atrubuto da api se liga nisso
   }catch(e){
       console.log(e.message);
   }

}


const loadingImg = async () =>{
    catIMG.src = await getCats();
}

catBTN.addEventListener('click',loadingImg);

loadingImg();

