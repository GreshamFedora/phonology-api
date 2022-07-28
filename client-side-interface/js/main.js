document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const topolectName = document.querySelector('input').value
    try{
        const response = await fetch(`https://topolect-phonology-api.herokuapp.com/api/${topolectName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data['f'].Symbols
    }catch(error){
        console.log(error)
    }
}