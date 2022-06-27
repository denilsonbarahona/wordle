import cleanData from "./clean";
/**
 * URL donde haremos el FETCH de los datos.
 */
const URL="https://raw.githubusercontent.com/denilsonbarahona/wordle/main/words.txt";

const getWords=()=>{
    return fetch(URL)
        .then(raw=>{
            return raw.text()
        }) 
        .then(data=>{
          const words =  data.split("\n")
          return cleanData(words);
        })
        .catch(error=>{
            console.log(error)
            return error
        })
}

export default getWords;