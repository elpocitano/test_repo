//  asincronia

const datos =[{
  id: 1,
  title: 'Ironman',
  year: 2008
},{
  id: 2,
  title: 'Spiderman: Homecoming',
  year: 2017
},{
  id: 3,
  title: 'Avenger: Endgame',
  year: 2019
}];

const getDatos = () => {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      resolve (datos);
    },1500);
  });  
}

getDatos() .then((datos)=> console.log(datos));
//.catch(err => ...); con esto manejamos el error

//const datosFetched = await getDatos();
