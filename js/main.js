'use strict';
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const openHeader = document.getElementById('openHeader');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hideMenu');
    openHeader.classList.add('hideMenu');
  });

  close.addEventListener('click', () =>{
    overlay.classList.remove('show');
    open.classList.remove('hideMenu');
    openHeader.classList.remove('hideMenu');
  });


}

















