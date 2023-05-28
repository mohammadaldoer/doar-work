let card=document.getElementById("card")
let Math_result_array=localStorage.getItem("MathReport")||null
let English_result_array=localStorage.getItem("englishReport")||null
let c=JSON.stringify(Math_result_array)
if(Math_result_array){
    card.innerText=c
}
