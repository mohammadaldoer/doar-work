let card=document.getElementById("card")
let Math_result_array=localStorage.getItem("MathReport")||null
let English_result_array=localStorage.getItem("englishReport")||null
if(Math_result_array)
{
    card.innerHTML=Math_result_array
    card.innerHTML+=English_result_array
    card.style.height="fit-content"
}
