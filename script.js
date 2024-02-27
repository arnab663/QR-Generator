
let qrTxt = document.getElementById("qrTxt")
let qrImg = document.getElementById("qrImg")
let imgBox = document.getElementById("imgBox")

function qrGenerator(){
    if(qrTxt.value.length > 0){
        qrImg.setAttribute("src","https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrTxt.value )
    setTimeout(()=>{
        imgBox.classList.add("show-img")
    },1000)
    }
    else{
        // setTimeout(()=>{
        //     qrTxt.classList.add("error")
        // },1500)
        alert("Add a text or URL to generate the QR")
        imgBox.classList.remove("show-img")
        setTimeout(()=>{
            qrTxt.classList.add("error")
        },1500)
        setTimeout(()=>{
            qrTxt.classList.remove("error")
        },500)
    }
}