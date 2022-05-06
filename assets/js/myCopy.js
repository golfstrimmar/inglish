'use ctrict'
const myCopy = () => {
    const copy = document.querySelectorAll('.copy')
    let singles = Array.prototype.slice.call(copy);
    singles.forEach((cell)=>{
        cell.addEventListener('click', copyAction)
        function copyAction(){
            let add =  document.createElement('textarea')
            let rez = document.createElement('div')
            let $result = document.querySelector('.result');
            add.innerHTML =  cell.innerText;
            rez.innerHTML =  cell.innerText;
            $result.appendChild(rez)
            document.querySelector('body').appendChild(add)
            document.querySelector('.result').appendChild(rez)
            add.select();
            document.execCommand('copy');
            add.remove();
            cell.classList.add('copy_active')
            setTimeout(function () {
                cell.classList.remove('copy_active')
            }, 200)
        }
    })
    const $s = document.querySelector('.reset__button');
    const $result = document.querySelector('.result');
    $s.addEventListener('click',(e) =>{
        $result.innerHTML = '';
    });

}

document.addEventListener("DOMContentLoaded", function () {
  const copy = document.querySelectorAll(".copy");
  if (copy.length > 0) {
   myCopy();
  }
});
   
