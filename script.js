var panel = document.querySelector('#panel');
var panelValue = '';

var allButtons = document.querySelectorAll('button');
allButtons.forEach((eachButton)=>{
    eachButton.addEventListener('click',(e)=>{
        if( (e.target.id !== 'equals') && (e.target.id !== 'c') && (e.target.id !== 'backspace') )
        {
            panelValue+=e.target.innerText;
            panel.innerText = panelValue;
        }
        else if(e.target.id == 'equals')
        {
            panel.innerText = (eval(panelValue));
        }
        else if(e.target.id == 'c')
        {
            panelValue='';
            panel.innerText='';
        }
        else if( (e.target.id == 'backspace') && (panelValue !== ''))
        {
            panelValue.slice(0,panelValue.length-1);
            panel.innerText = panelValue;
        }
        
        
        
    })
})