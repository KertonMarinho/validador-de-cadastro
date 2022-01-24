let validator  = {
    handlSubmit:(event)=> {
        event.preventDefault();

        let send = true;

        let inputs =  form.querySelectorAll('input');

        for(let i=0;i<inputs.length;i++) {
            let input = inputs[i];
        }
        
        if(send) {
            form.submit();
        }
    }
    
    
}



let form= document.querySelector('.validator');
form.addEventListener('submit',validator.handleSubmit