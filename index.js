
const postButton = document.getElementById("post-button");
postButton.addEventListener("click",()=>{
    postComment();
});


function postComment(){
    const divToWrite = document.getElementById("result");
    const inputValue = document.getElementById("textarea").value;

    //finding total number of comments and increading it
    const countElement = document.getElementById("count").innerText;
    const countValue = parseInt(countElement)+1;
    document.getElementById("count").innerText= countValue;


    // add random user to comment
    const i = Math.floor((Math.random() * 1000));
    const nameValue = "User"+i;

    //creating h5 tag for username in comment
    const headElement =document.createElement("h5");
    headElement.innerText = nameValue;
    headElement.style.textDecoration="underline";
    
    //creating the elemnts for comments
    const divElement = document.createElement("div");
    const spanElement = document.createElement("span");
    spanElement.innerText = inputValue;
    spanElement.style.paddingLeft=2+'px';
    const rulerEl = document.createElement("hr");
    const rulerID = "r"+countValue;
    rulerEl.setAttribute("id",rulerID);

    //putting id to div element to use it for further operation
    divElement.setAttribute("id",countValue);
    divElement.setAttribute("class","commentS");

    //appending these elements to div to render
    divElement.appendChild(headElement);
    divElement.appendChild(spanElement);
    


    //adding like,reply, delete button to comments and giving them arttributes so that we can able to identify later for operations
    const div1 = document.createElement("div");
    div1.setAttribute("class","featurE");
    const likeSection = document.createElement("b");
    const likecount = document.createElement("i");
    likecount.innerText = 0;
    const Lcount = "lc"+document.getElementById("count").innerText;
    likecount.setAttribute("id",Lcount);
    likeSection.setAttribute("class","btnl");
    const Latt = "l"+document.getElementById("count").innerText;
    likeSection.setAttribute("id",Latt);
    likeSection.innerText="Likes-";
    likeSection.appendChild(likecount);
    const replySection = document.createElement("b");
    replySection.setAttribute("class","btnr");
    const replycount=document.createElement("i");
    const replycountID = "rc"+countValue;
    replycount.setAttribute("id",replycountID);
    replycount.innerText=0;
    replySection.innerText="Reply-";
    replySection.appendChild(replycount);
    const deleteSection= document.createElement("b");
    deleteSection.setAttribute("class","btnd");
    deleteSection.innerText = "Delete";
    div1.appendChild(likeSection);
    div1.appendChild(replySection);
    div1.appendChild(deleteSection);

   
    //........................................
    divElement.appendChild(div1);
    divElement.appendChild(rulerEl);
    divToWrite.appendChild(divElement);

    //applying logic to like section
    likeSection.onclick=()=>{
        const reqID = likecount.getAttribute("id");
        const cValue = parseInt(document.getElementById(reqID).innerText)+1;
        document.getElementById(reqID).innerText = cValue;
    };

    //applying logic to reply section
    replySection.onclick=()=>{
        replyF(countValue);
    };

    deleteSection.onclick=()=>{
        deleteF(countValue);
    };
}


function replyF(count){
    const divElement = document.getElementById(count);
    const divForThis  = document.createElement("div");
    const divID = "d"+count;
    divForThis.setAttribute("id",divID);
    const replyContent = document.createElement("textarea");
    const rulerID = "r"+count;
    const rulerEl = document.getElementById(rulerID);
    rulerEl.remove();
    const replyID = "re"+count;
    replyContent.setAttribute("class","reply-disp");
    replyContent.setAttribute("placeholder","Enter your reply here..........");
    replyContent.setAttribute("id",replyID);
    const div11 = document.createElement("div");
    div11.setAttribute("class","btn-div");
    const button1 = document.createElement("button")
    button1.setAttribute("class","btn2");
    button1.innerText = "Reply";
    const button2  =document.createElement("button");
    button2.setAttribute("class","btn2");
    button2.innerText="Cancel";
    const ruler1 = document.createElement("hr");
    ruler1.setAttribute("id",rulerID);
    div11.appendChild(button1);
    div11.appendChild(button2);

    divForThis.appendChild(replyContent);
    divForThis.appendChild(div11);
    

    divElement.appendChild(divForThis);
    divElement.appendChild(ruler1);

    button1.onclick=()=>{
        replyAdd(count);
    };

    button2.onclick=()=>{
        cancellF(divID);
    };
}

function deleteF(count){
    const divElement = document.getElementById(count);
    divElement.remove();
    if(count[4] == '-'){
        count = "rc"+count[3];
    }
    const countElement = document.getElementById(count).innerText;
    const countValue = parseInt(countElement)-1;
    document.getElementById(count).innerText= countValue;
}

function cancellF(count1){
    const divToRemoved = document.getElementById(count1);
    divToRemoved.remove();
}

function replyAdd(count){

    //increasing the reply count
    const replycountID ="rc"+count;
    const replyC = document.getElementById(replycountID).innerText;
    document.getElementById(replycountID).innerText = parseInt(replyC)+1;


    const divElement = document.getElementById(count);
    const divElement1 = document.createElement("div");
    const replyID = "re"+count;
    const replyContent = document.getElementById(replyID).value;
    const divToWrite = document.createElement("div");
    divToWrite.innerText = replyContent;
    const divID = "rep"+count+"-"+replyC;
    divElement1.setAttribute("id",divID);
    divElement1.setAttribute("class","reply-c");
    


    //removing and add ruler
    const rulerID = "r"+count;
    const rulerEl = document.getElementById(rulerID);
    rulerEl.remove();
    const ruler1 = document.createElement("hr");
    ruler1.setAttribute("id",rulerID);

    


    //removing textarea and button of reply
    const divIDr = "d"+count;
    document.getElementById(divIDr).remove();
    
    


    divElement1.appendChild(divToWrite);
    divElement1.appendChild(ruler1);
    divElement.appendChild(divElement1);

    buttonAdd(divID);
}




function buttonAdd(divNo){
    const divElement = document.getElementById(divNo);
    let count="";
    for(let i=3;i<divNo.length;i++){
        if(divNo[i] == "-"){
            break;
        }
        count += divNo[i];
    }
    const l = divNo.length -1;
    const reqNo = divNo[l];

    //removing and add ruler
    const rulerID = "r"+count;
    const rulerEl = document.getElementById(rulerID);
    rulerEl.remove();
    const ruler1 = document.createElement("hr");
    ruler1.setAttribute("id",rulerID);

    const divForbutton = document.createElement("div");
    const likeSection1 = document.createElement("b");
    const likecount = document.createElement("i");
    likecount.innerText = 0;
    const Lcount = "lc"+count+"-"+reqNo;
    likecount.setAttribute("id",Lcount);
    likeSection1.setAttribute("class","sub-btnl");
    const Latt = "l"+document.getElementById("count").innerText;
    likeSection1.setAttribute("id",Latt);
    likeSection1.innerText="Likes-";
    likeSection1.appendChild(likecount);
    const replySection = document.createElement("b");
    replySection.setAttribute("class","sub-btnr");
    const replycount=document.createElement("i");
    const replycountID = "rc"+count;
    replycount.setAttribute("id",replycountID);
    replycount.innerText=0;
    replySection.innerText="Reply-";
    replySection.appendChild(replycount);
    const deleteSection= document.createElement("b");
    deleteSection.setAttribute("class","sub-btnd");
    deleteSection.innerText = "Delete";

    divForbutton.appendChild(likeSection1);
    divForbutton.appendChild(replySection);
    divForbutton.appendChild(deleteSection);

    divElement.appendChild(divForbutton);
    const mainDiv = document.getElementById(count);
    mainDiv.appendChild(ruler1);

    likeSection1.onclick = ()=>{
        const reqID = likecount.getAttribute("id");
        const cValue = parseInt(document.getElementById(Lcount).innerText)+1;
        document.getElementById(Lcount).innerText = cValue;
    };

    replySection.onclick = ()=>{
        console.log(divNo);
        replyF(divNo);
    }
    
    deleteSection.onclick = ()=>{
        deleteF(divNo);
    }

}


