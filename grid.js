const container = document.querySelector(".container");
const btn4 = document.querySelector("#reset");
const btn2 = document.querySelector("#red");
const btn1 = document.querySelector("#black");
const btn3 = document.querySelector("#eraser");

function createDivs(num){
    for(let x=0; x<num; x++){
        for(let i=0; i<num; i++){
            const div = document.createElement('div');
            //mouse listener to let color from hovering stay
            //red pen
            btn2.addEventListener('click', function() {
                div.addEventListener('mouseenter', function () {
                    div.classList.add('hoverRed'); // Add a class on hover
                    div.classList.remove('hoverBlack'); 
                    div.classList.remove('hoverEraser');
                });
            });

            //black pen
            btn1.addEventListener('click', function() {
                div.addEventListener('mouseenter', function () {
                    div.classList.add('hoverBlack'); // Add a class on hover
                    div.classList.remove('hoverRed'); 
                    div.classList.remove('hoverEraser');
                });
            });

            //eraser
            btn3.addEventListener('click', function() {
                div.addEventListener('mouseenter', function () {
                    div.classList.add('hoverEraser'); // Add a class on hover
                    div.classList.remove('hoverBlack'); 
                    div.classList.remove('hoverRed');
                });
            });

            //clearing the grid of all color
            btn4.addEventListener('click', function () {
                div.classList.remove('hoverRed'); // Remove the class on mouse leave
                div.classList.remove('hoverBlack'); // Remove the class on mouse leave
                div.classList.remove('hoverEraser'); // Remove the class on mouse leave
            });

            container.appendChild(div);
        }
    }
    
}
createDivs(16);





