let siteName =document.getElementById('Name')
let url =document.getElementById('Url')
let dataBody=document.getElementById('dataBody')
let addBtn=document.getElementById('add')
let resetBtn=document.getElementById('reset')
let messageRequired=document.querySelector('.messageRequired')
let messageExist=document.querySelector('.messageExist')
let messageUrlRequired=document.querySelector('.messageUrlRequired')
let messageUrlExist=document.querySelector('.messageUrlExist')
let allData=[]

function addBook(){
if(validationName() == true && validationUrl() ==true){
  let book={
    name:siteName.value,
    link:url.value,
  }
  // console.log("mjdk");
  allData.push(book)
  localStorage.setItem('book',JSON.stringify(allData))
  clear()
  displayBooks()
}
}

function displayBooks(){
  var books='';
  for (let i=0; i< allData.length;i++){
    books +=`
    <tr class="my-4">
    <td>${allData[i].name}</td>
    <td><a href="${allData[i].link}" target="_blank"><button class="btn btn-outline-info">view</button></a>
    <button class="btn btn-outline-danger" onclick="deleteBook(${i})">Delete</button></td>
</tr>
    `
  }
  dataBody.innerHTML=books
}

if(localStorage.getItem('book').length !=null){
  allData=JSON.parse(localStorage.getItem('book'))
  displayBooks()
}

// siteName.addEventListener('input',validationName)
function validationName(){
  if(siteName.value == ""){
    siteName.classList.replace('is-valid','is-invalid')
    messageRequired.classList.replace('d-none','d-block')
    return false;
  }
  else{
    for(let i=0;i<allData.length;i++){
      if(siteName.value == allData[i].name)
      {
        siteName.classList.replace('is-valid','is-invalid')
      messageExist.classList.replace('d-none','d-block')
        return false
      }
    }
    siteName.classList.replace('is-invalid','is-valid')
    messageRequired.classList.replace('d-block','d-none')
    messageExist.classList.replace('d-block','d-none')
    return true
  }



}



// url.addEventListener('input',validationUrl)
function validationUrl(){
  if(url.value == ""){
    url.classList.replace('is-valid','is-invalid')
    messageUrlRequired.classList.replace('d-none','d-block')
    return false;
  }
  else{
    for(let i=0;i<allData.length;i++){
      if(url.value == allData[i].link)
      {
        url.classList.replace('is-valid','is-invalid')
      messageUrlExist.classList.replace('d-none','d-block')
        return false
      }
    }
    url.classList.replace('is-invalid','is-valid')
    messageUrlRequired.classList.replace('d-block','d-none')
    messageUrlExist.classList.replace('d-block','d-none')
    return true
  }



}

function clear(){
  siteName.value=''
  url.value=''
}

function deleteBook(x){
  allData.splice(x,1)
  displayBooks()
  localStorage.setItem("book",JSON.stringify(allData))

}


function reset() {
  localStorage.removeItem('book')
  allData=[]
  displayBooks()
}

resetBtn.addEventListener('click',reset)
















