var idval = '';
var overlay = document.getElementById('overlay');
var delContent = document.getElementById('delete-content');
const delete_btn = (id)=>{
    this.addEventListener('click',()=>{
            overlay.classList.add('active');
            delContent.classList.add('active');
            idval = id;
            console.log(idval);
    })
}

const yesBtn = ()=>{
    this.addEventListener('click',()=>{
        overlay.classList.remove('active');
        delContent.classList.remove('active');
        if(idval == 'delete-1'){
            var cardid = 'card-1';
            const element = document.getElementById(cardid);
            element.remove();
        }else if(idval == 'delete-2'){
            var cardid = 'card-2';
            const element = document.getElementById(cardid);
            element.remove();
        }else if(idval == 'delete-3'){
            var cardid = 'card-3';
            const element = document.getElementById(cardid);
            element.remove();
        }else if(idval == 'delete-4'){
            var cardid = 'card-4';
            const element = document.getElementById(cardid);
            element.remove();
        }else if(idval == 'delete-5'){
            var cardid = 'card-5';
            const element = document.getElementById(cardid);
            element.remove();
        }
    })
}

const noBtn = ()=>{
    this.addEventListener('click',()=>{
        overlay.classList.remove('active');
        delContent.classList.remove('active');
    })
    
}