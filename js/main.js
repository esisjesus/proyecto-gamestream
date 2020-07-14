

    
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
        document.querySelector("#btn-menu").addEventListener("click",onClickButton);
    }
    );

   

    const images = [ 'url(../images/aoe-bg-min.jpeg)', 'url(../images/gta-v-bg-min.jpg)', 'url(../images/fifa-10-bg-min.jpg)', 'url(../images/horizon-bg-min.jpg)', 'url(../images/cod-bg-min.jpg)', 'url(../images/skyrim-bg-min.jpg)', 'url(../images/valhalla-min.jpg)', 'url(../images/silent-hill-min.jpg)', 'url(../images/paladins-min.jpg)', 'url(../images/nba-min.jpg)', 'url(../images/crash-min.jpg)', 'url(../images/injustice-min.jpg)'];
        
        var valrandom = null;
        function change() {
            
            
            var val = Math.floor(Math.random() * 12) + 1;
        
            $('#img').fadeOut(1000);

            setTimeout(() => {
                $('#img').css('background-image', images[val - 1]);
            }, 1000);

            $('#img').fadeIn(1000);


        }
        $(document).ready(function () {
            setInterval(() => {
                change();
            }, 10000);
        })

    
