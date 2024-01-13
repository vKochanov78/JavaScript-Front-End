function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   let searchingData = document.getElementById('searchField');
   let tableRows = document.querySelectorAll('tbody tr');

   function onClick() {
      
      for (const row of tableRows) {
         row.classList.remove('select');
         if (searchingData.value !== '' && row.innerHTML.includes(searchingData.value)){
            row.className = 'select';
         }
      }

      searchingData.value = '';

   }
}