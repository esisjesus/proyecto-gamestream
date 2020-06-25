

    
    document.addEventListener("DOMContentLoaded",function(){
        var header = document.getElementById('header');
        var headroom = new Headroom(header);
        headroom.init();
        function onClickButton(event){
            event.preventDefault();
            var element = document.querySelector("#links")
            if(element.style.height === "60px" || element.style.height === "" ){
                element.style.height = "75vh"
            }else{
                element.style.height = "60px"
            }
    
        }
        document.querySelector("#btn-menu").addEventListener("click",onClickButton)
    }
    )
    
