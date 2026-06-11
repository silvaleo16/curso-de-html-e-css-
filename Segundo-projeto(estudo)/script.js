const criarItemDeAtividade = () => {
    return `
    <div>
        <input type="checkbox">
        <span>Academia em grupo</span>
        <time>sabádo, 18 de abril às 08:00h</time>
    </div>
    `
}


const section = document.querySelector('section');
section.innerHTML = criarItemDeAtividade();