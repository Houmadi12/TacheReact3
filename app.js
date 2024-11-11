let n = 0;

function numberFormat(n){
    return n.toString().padStart(2, '0');
}

function render(){
    const items = [
        'Tache 1',
        'Tache 2',
        'Tache 3',
    ]
 
    const title = <> 
                    <h1>
                            Bonjour les gens <span>{n}</span>
                    </h1>
                    <ul>
                          {items.map((item, k) => <li key={k}>{item}</li>)}
                    </ul>
                  </>
    
    ReactDOM.render(title, document.getElementById("app"))
}

render();

window.setInterval(() => {
    n++
    render()
}, 1000)