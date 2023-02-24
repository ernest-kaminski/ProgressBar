
window.onload = function(){
    const circleSection = document.querySelector('.circles');
    const circles = document.querySelectorAll('.circle');
    const progressCircles = document.querySelectorAll('.type-2')
    const progressText = document.querySelectorAll('.circles h1');

    let bool = false;

    if(bool == false){
        for(let i = 0; i < circles.length; i++){
            const setProgress =((percent) => {
                progressCircles[i].style.strokeDashoffset = circumference - (percent/100) * circumference
            })        

            let radius = progressCircles[i].r.baseVal.value;
            let circumference = radius * 2 * Math.PI;
            progressCircles[i].style.strokeDasharray = circumference

            const progress = circles[i].dataset.prog;
            progressText[i].innerHTML = progress + "%";

            setProgress(progress)
           
        }
        bool = true
    }
}