let validator  = {
    handleSubmit:(event)=> {
        event.preventDefault();

        let send = true;

        let inputs =  form.querySelectorAll('input');

        for(let i=0;i<inputs.length;i++) {
            let input = inputs[i];
            let check =validator.checkInput(input);
            if (check !== true) {
                send = false;
                validator.showError(input, check);
            }
        }
        
        if(send) {
            form.submit();
        }
    
    
    
    },
    checkInput:(input) => { /*vai checar se tem alguma regra e conferi as regras*/
        let rules = input.getAttribute('data-rules'); //DATA RULES É NOME CRIADO POR MIN PARA ARMAZENAR UM VALOR E RETORNA ESTE VALOR

        if(rules !== null){
            rules = rules.split('|'); //separa as regras
            for(let k in rules) {//VERIFICA AS REGRAS
                let rDetails = rules[k].split('=');
                switch (rDetails[0]) { //ITEM DA REGRA  
                    case'required': //VER SO O REQUIERD ESTÁ COMPLETADO
                        if(input.value == ' ') {
                            return 'Campo não pode ser vazio.';
                        }
                        

                    break;
                    case 'min':  //validar o numero de caracteres
                        if(input.value.length < rDetails[1]) {
                            return 'Campo tem que ter pelo menos ' +rDetails[1]+' caracteres';
                        }
                    break;
                }
                

            }
            
        }
        return true;
    },
    showError:(input, error) => {

        input.style.bordercolor ='#ff0000';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML =error;

        /*não existe uma funçao especifica no js que adiciona depois do elemento,somente antes do elemento (insertBefore)
        soluçao:pegar o item depois dele(elementsibling)*/
        input.parentElement.insertBefore(errorElement, input.Elementsibling);
    }
    
   
}



let form = document.querySelector('.validator');
form.addEventListener('submit',validator.handleSubmit);
