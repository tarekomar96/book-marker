var siteName = document.getElementById('sName');
var siteUrl = document.getElementById('sUrl');

var websitesList=[];
var website;


if(localStorage.getItem('website') == null){
    websitesList=[];

}else{
    websitesList = JSON.parse(localStorage.getItem('website'))
    display()
}



addBtn.onclick = function(){
if(wnameValidation() === true && wUrlValidation() === true){

    create()
}else{
    alert(`Site Name or Url is not valid, Please follow the rules below :
    1-Site name must contain at least 3 characters
    2-Site URL must be a valid one
    `)
}

localStorage.setItem('website',JSON.stringify(websitesList))
display()
reset()

}






   




//validation website name

function wnameValidation(){
    var nameRegex =/^[A-Za-z]{3,30}$/;
    var webSiteName = siteName.value;
    if(nameRegex.test(webSiteName)){

        return true;

    }else{
        return false;
    }
}




//validation website url

function wUrlValidation(){
    var nameRegex =/^(https:\/\/www.)[A-Za-z]{3,30}(.)[A-Za-z]{2,30}\/$/;
    var webSiteUrl = siteUrl.value;
    if(nameRegex.test(webSiteUrl)){

        return true;

    }else{
        return false;
    }
}





//create
function create(){
     website = {
        wName:siteName.value,
        wUrl:siteUrl.value
    }
    websitesList.push(website);
   
}




//display
function display(){
    var trs = ``
    for(var i=0; i<websitesList.length; i++){
trs +=
`
<tr>
<td>${i+1}</td>
<td>${websitesList[i].wName}</td>

<td><button class="btn2 btn btn-warning onclick="visit(${i})" id"visitBtn"><a class="text-decoration-none text-white" href="${websitesList[i].wUrl}"><i class="fa-solid fa-eye pe-2"></i><span>Visit</span></a></button></td>   

                                
<td><button class="btn3 btn btn-danger" onclick="delte(${i})"><i class="fa-solid fa-trash-can pe-2"></i><span>Delete</span></button></td>

</tr>
`
    }
    document.getElementById('tableBody').innerHTML=trs;
} 










//delete

function delte(index){
    websitesList.splice(index,1)  
    localStorage.setItem('website',JSON.stringify(websitesList))
    display()
}





//reset

function reset(){

   siteName.value = ''
   siteUrl.value = ''
}



