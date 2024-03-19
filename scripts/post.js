var count = 1;
var LikeBtn = document.getElementById('LikeBtn');
var editBtn = document.getElementById('editBtn');
var editable = document.getElementById('editable-cont');
var title = document.getElementById('edit-title');
var para = document.getElementById('editable-para');
// Like button section
LikeBtn.onclick = ()=>{
        console.log(count);
        var liketext = document.getElementById('likeText');
        liketext.innerHTML = count+' person likes this!';
        count++;
}

// edit button section
var click = false;

editBtn.onclick = ()=>{
    
    if(click){
        editBtn.innerHTML = 'Edit &#xf044;';
        editable.setAttribute('contenteditable','false');
        title.style.border = " none";
        para.style.border = "none";
    }else{
        editBtn.innerHTML = 'Save &#xf0c7;';
        editable.setAttribute('contenteditable','true');
        title.style.border = " solid #eb7990";
        para.style.border = " solid #eb7990";
    }
    click = !click;
}

// Comment section
var commenttext = document.getElementById('cmt');
var comBtn = document.getElementById('comment-btn');
var commentBox = document.getElementById('allComments');
comBtn.onclick = ()=>{
    commentBox.innerHTML += '<p>'+ commenttext.value +'</p>';
}