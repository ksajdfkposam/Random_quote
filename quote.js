let para=document.getElementById("para-1")
console.log(para.innerText)







     const  quote= async ()=>{
const res=await fetch("https://api.quotable.io/quotes/random");
const data=await res.json();
console.log(data,"data")
para.innerText=`"${data[0].content}"`;

  

    }


    const tweet=()=>{
       window.open("https://twitter.com/intent/tweet?text=Hello%20world","Tweet","width=600","height=300")
    }

    quote();
