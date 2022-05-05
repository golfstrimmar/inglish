"use strict";

// const Select = (select) => {

// const $button = select.querySelector('.dropdown-button');
// const $list = select.querySelector('.dropdown-list');
// const items = $list.querySelectorAll('.dropdown-list__item')
// const input = select.querySelector('.drop__input')


// $button.addEventListener('click',(e) =>{ 
//  e.preventDefault;
// $list.classList.toggle("_active");
// e.target.classList.add('dropdown-button-active');
// });


// items.forEach(item => { 
// item.addEventListener('click',(e) =>{ 
//   e.stopPropagation();
//   $button.innerHTML = item.innerHTML;
//   $button.focus()
//   input.value = item.getAttribute("data-value")
//   $list.classList.remove("_active");
// });
// })


// document.addEventListener('click',(e) =>{ 
//   if(e.target !== $button){
//     $button.classList.remove('dropdown-button-active');
//     $list.classList.remove("_active");
//   }
// });

// document.addEventListener('keydown',(e) =>{ 
//   if(e.key === "Tab" || e.key === "Escape"){
//     $button.classList.remove('dropdown-button-active');
//     $list.classList.remove("_active");
//   }
// });
// }
const Select = (select) => {

  const $button = select.querySelector('.dropdown-button');
  const $list = select.querySelector('.dropdown-list');
  const items = $list.querySelectorAll('.dropdown-list__item')
  const input = select.querySelector('.drop__input')

  select.addEventListener('click', (e) => {
    e.preventDefault;
    if (e.target.tagName == "BUTTON") {
      e.target.classList.toggle('dropdown-button-active');
      $list.classList.toggle("_active");
     
      items.forEach(item => {
        item.addEventListener('click', (e) => {
          items.forEach(item => {
            item.classList.remove("_item-active");
            e.target.classList.add("_item-active");
          });
          e.stopPropagation();
          $button.innerHTML = item.innerHTML;
          input.value = item.getAttribute("data-value")
          $list.classList.remove("_active");
          $button.classList.remove('dropdown-button-active');
        });
      })
      
    } 
  });

  // $button.addEventListener('click',(e) =>{ 
  //  e.preventDefault;
  // $list.classList.toggle("_active");
  // e.target.classList.add('dropdown-button-active');
  // });



  // items.forEach(item => { 
  // item.addEventListener('click',(e) =>{ 
  //   e.stopPropagation();
  //   $button.innerHTML = item.innerHTML;
  //   $button.focus()
  //   input.value = item.getAttribute("data-value")
  //   $list.classList.remove("_active");
  // });
  // })


  document.addEventListener('click', (e) => {
    if (e.target !== $button) {
      $button.classList.remove('dropdown-button-active');
      $list.classList.remove("_active");
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === "Tab" || e.key === "Escape") {
      $button.classList.remove('dropdown-button-active');
      $list.classList.remove("_active");
    }
  });
}




document.addEventListener('DOMContentLoaded', function () {
  const selects = document.querySelectorAll('.form-group')
  selects.forEach(select => {
    Select(select);
  })
})