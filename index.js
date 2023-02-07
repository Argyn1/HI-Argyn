document.addEventListener('click', (event) =>{
    event.preventDefault();
} ) 


document.querySelector('h1').style.color = 'red'


document.querySelector('h3').style.color = 'blue'

console.log(window);



const getuser = async () => {
    try {
        const res = await fetch('vc.com')
        const data = await res.json()
        
    }   catch (e) {
        console. log(e)
    }
}
