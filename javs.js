const key = "8da8056a8c9b9820355430df2b218153f878a035";

const url =  `https://api.getgeoapi.com/v2/currency/list?api_key=${key}&format=json`
const url2= ` https://api.getgeoapi.com/v2/currency/convert
?api_key=8da8056a8c9b9820355430df2b218153f878a035
&from=EUR
&amount=1
&format=json`

//document elements 


//documents error

const error= document.createElement("H1");
error.classList.add("error")
error.textContent="Error 404"
                                         
//get the money

async function asyncGet()
{
    let responseHTTp;
    let errorGet=false;
    
     fetch(url2)
      .then(response => {return response.json()})
      .then(data =>{
        console.log(data)


            
        const arrayDataValues = Object.entries(data.rates).map((e) =>  { return e[1] } );
        console.log(arrayDataValues)
        let i=0;
        arrayDataValues.forEach((element) => {
        
            const card= document.createElement("div");
            card.classList.add("card");
            const cardBody= document.createElement("div");
            cardBody.classList.add("card-body");
            const cardName= document.createElement("h5");
            cardName.classList.add("card-title");
            console.log(element)
            cardName.textContent=` ${element.currency_name}`;
            const cardSubName = document.createElement("h6");
            cardSubName.classList.add("card-subtitle");
            cardSubName.textContent=`${data.updated_date}`;
            const cardText= document.createElement("p");
            cardText.classList.add("card-text");
            cardText.textContent=`${element.rate}💸= 1€`;



            document.getElementById("cuerpo").appendChild(card);
            document.getElementsByClassName("card")[i].appendChild(cardBody);
            document.getElementsByClassName("card-body")[i].appendChild(cardName);
            document.getElementsByClassName("card-body")[i].appendChild(cardSubName);
            document.getElementsByClassName("card-body")[i].appendChild(cardText);
            i++;
        })
            
        
    
      })
      .catch(()=> {console.log("Error");
                   errorGet=true;
                  });

}


asyncGet()

    


