let info=[

    {
        emptyInput:"What's your name?",
        patternInput:"Name shouldn't include special keys or numbers!",
        elementID:"name_err",
        exp:"[A-Za-z\\s]+$",
        value:null,
        isValidate:false,
    },
    {
        emptyInput:"Email is compulsory?",
        patternInput:"Please enter a valid email address",
        elementID:"email_err",
        exp:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
        value:null,
        isValidate:false,
    },
    {
        emptyInput:"Create password?",
        patternInput:"Must consist one uppercase, lower and one number",
        elementID:"password_err", 
        exp:"[A-Za-z@0-3]$",
        value:null,
        isValidate:false,
    }
];




function ValidateInt(event){

    let value=event.target.value;
    let fieldID=event.target.id;

    if(fieldID==="name")
    {
        info[0].value=value;
        checkError(info[0]);
    }

    else if(fieldID==="email")
    {
        info[1].value=value;
        checkError(info[1]);
    }

    else if(fieldID==="password")
    {
        info[2].value=value;
        checkError(info[2]);
    }

    let tempInfo=info.filter((ele,index)=>{
        return ele.isValidate===true;
    })

    if(tempInfo.length===info.length)
    {
        document.getElementById("btn").disabled=false;
    }    
    else{
        document.getElementById("btn").disabled=true;
    }
    
}

function checkError(fieldInfo)
{
    let status=ValidateExp(fieldInfo.value,fieldInfo.exp);

    let message=null;

        if(status!==true)
        {
            if(status===1)
            {
                message=fieldInfo.emptyInput;
            }            
            else if(status===2)  
            {
                message=fieldInfo.patternInput;
            }

            document.getElementById(fieldInfo.elementID).style.display="flex";
            document.getElementById(fieldInfo.elementID).innerText=message;
            fieldInfo.isValidate=false;
        }
        else
        {
            document.getElementById(fieldInfo.elementID).style.display="none";
            fieldInfo.isValidate=true;
        }
}

function ValidateExp(value,exp)
{
    let pattern=new RegExp(exp);

    if(value==="")
    {
        return 1;
    }
    else
    {
        if(pattern.test(value)!==true)
        {
            return 2;
        }
    }

    return true;
}


function openPop(){

    document.getElementById("memberModal").style.display="flex";
    document.getElementById("name_err").style.display="none";
    document.getElementById("email_err").style.display="none";
    document.getElementById("password_err").style.display="none";
    document.getElementById("form").reset();
    document.getElementById("btn").disabled=true;
}


function openReq(){

    window.location=("https://www.google.com/")
}




currentSlide=1;

function nextSlide(){

    currentSlide++;
    openSlide(currentSlide);
    document.getElementById("slider").style.transition=".5s"

    if(currentSlide>3){

        setTimeout(function(){

            currentSlide=1;
            openSlide(currentSlide);
            document.getElementById("slider").style.transition="0s"
            
        }, 500);

    }

    resetInterval();
    
}


function prevSlide(){

    currentSlide--;
    openSlide(currentSlide);
    document.getElementById("slider").style.transition=".5s"

    if(currentSlide<1){

        setTimeout(function(){

            currentSlide=3;
            openSlide(currentSlide);
            document.getElementById("slider").style.transition="0s"
            
        }, 500);

    }

    resetInterval();
    
}

let interval=setInterval(()=>{

    nextSlide();

},3000)

function resetInterval(){

    clearInterval(interval);

    interval=setInterval(()=>{

        nextSlide();
    
    },3000)
}

function openSlide(slideLength){

    let marginLeft=(slideLength)*100;
    document.getElementById("slider").style.marginLeft= -marginLeft+"%";

    let indicator=document.getElementsByClassName("indicators");

    document.getElementById("next").classList.add("disable");
    document.getElementById("prev").classList.add("disable");
    for(let i=0;i<indicator.length;i++)
        {
            indicator[i].classList.add("disable");
        }

    setTimeout(function(){

        document.getElementById("next").classList.remove("disable");
        document.getElementById("prev").classList.remove("disable");
        for(let i=0;i<indicator.length;i++)
        {
            indicator[i].classList.remove("disable");
        }
       
    },500)

    for(let i=0;i<indicator.length;i++)
    {
        if((i+1)===slideLength)
        {
            indicator[i].classList.add("white");
        }
        else
        {
            indicator[i].classList.remove("white");
        }
    }

}


function indicate(slideLength){

    if(slideLength>=1 && slideLength<=3)
    {
        currentSlide=slideLength;
        openSlide(slideLength);
        document.getElementById("slider").style.transition=".5s"
    }
}

let contents=[
    {
        id:"1",
        name:"SKAYJAY (Lead Designer)",
        design:["Graphics & UI Design"],
        type:"Graphics Design",
        price:"80",
        duration:"3 months",
        meaning:"Projecting ideas and experiences with visual and textual content",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZPSmfzFUthuCAjXXDYkoBkRlJGBD4-2MYdAsZoTrt6Dc78HArKGS6OwhmHmCIpE6q6E&usqp=CAU"
    },
    {
        id:"2",
        name:"ARC D Programmer",
        design:["Web Developper, Coder "],
        type:"Web Development",
        price:"150",
        duration:"6 months",
        meaning:"Giving a set of instructions to a computer to make it perform any tasks",
        pic:"https://media.istockphoto.com/id/846489122/photo/responsive-web-design-website-wireframe-sketch-layout-on-computer-screen.jpg?b=1&s=612x612&w=0&k=20&c=gJZzAvtdRCBFaYW44fD5tZKS9mff_DGlS6pS__jrs2s="
    },
    {
        id:"3",
        name:"Agba",
        design:["Video Editing,Animations"],
        type:"Video Editing",
        price:"60",
        duration:"4 months",
        meaning:"Manipulating and combining video files to create a completed video project",
        pic:"https://images.pexels.com/photos/2335050/pexels-photo-2335050.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
]


function displayTypes(contentsArr){

    contentsArr.forEach((contents,index)=>{

    let designBox = document.getElementById("design_box");

    let card = document.createElement("div");
    card.classList.add("card");
        
    let imageContainer = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src",contents.pic)
    imageContainer.classList.add("image");
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);

    let info = document.createElement("div");
    info.classList.add("info");

    let button = document.createElement("button")
    button.classList.add("button");
    button.style.width="50%"
    button.append("Learn More");
    button.onclick=openModal.bind(this,contents.id);
    let meaning = document.createElement("p")
    meaning.append(contents.meaning+=".")
    info.append(contents.type);
    info.append(meaning);
    info.appendChild(button);
    card.appendChild(info);
    
    designBox.appendChild(card);

    })

    
}

displayTypes(contents);



function displayMembers(contentsArr){

    contentsArr.forEach((members,index)=>{

        let membersBox = document.getElementById("members");

        let imageBall = document.createElement("div")
        imageBall.classList.add("imageBall");
        let img = document.createElement("img")
        img.setAttribute("src");
        imageBall.appendChild(img);

        let details = document.createElement("div");
        details.classList.add("details");
        details.append(details);
        details.appendChild("button")

        membersBox.appendChild(imageBall);
        membersBox.appendChild(details);
    })


}

displayMembers(contents);



function openModal(contentsId){

    document.getElementById("imageModal").style.display="flex";

    let newContent=contents.find((contents,index)=>{

        return contents.id===contentsId;
    })

    console.log(newContent);
    document.getElementById("poster").src=newContent.pic;
    document.getElementById("design").innerText=newContent.type;
    document.getElementById("meaning").innerText=newContent.meaning;
    document.getElementById("tutor").innerText=newContent.name;
    document.getElementById("price").innerText=newContent.price+=" Naira";
    document.getElementById("duration").innerText=newContent.duration;
}

function closeModal(pop){
    document.getElementById(pop).style.display="none";
    // document.getElementById("memberModal").style.display="none";
}


