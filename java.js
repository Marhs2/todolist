const input = document.querySelector("#input")
const send = document.querySelector("#send")
const box = document.querySelector("#box")
const alldel = document.querySelector("#all-del")

send.addEventListener('click', function() {
    addtodo();
  });
  
input.addEventListener('keydown', function(event){
    if(event.keyCode == 13){
        addtodo()
    }

})


  function addtodo(){
        
    if(input.value !== ""){
        const div = document.createElement("summary")
        const newli = document.createElement("li")
        const newspan = document.createElement("span")
        const checkbox = document.createElement("input")
        checkbox.type = 'checkbox'
        const button = document.createElement("button")

        button.textContent = "닫기"

        box.appendChild(div)
        div.appendChild(newli)
        newli.appendChild(checkbox)
        newli.appendChild(newspan)
        div.appendChild(button)
        newspan.textContent = input.value


        input.value = ""

        button.addEventListener('click', function del(){
            box.removeChild(div)
        })


        
 





        checkbox.addEventListener('click', function done(){ 
            
            if(confirm("성공했나요")){
                alert("성공을 축하합니다")
                newspan.style.textDecoration = "line-through"
                newspan.style.color = "red"

                alldel.addEventListener('click', function(){
                    box.removeChild(div)
                })
            }else{
                alert("화이팅하세요!")
                checkbox.checked = false;
            }
        })


    }else{
        alert("내용을 입력하세요")
    }



  
  }
