function search() {
   let listItems = Array.from(document.querySelectorAll('li'));
   let searching = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matches = 0;

   for (const li of listItems) {
      if (li.textContent.includes(searching)){
         matches++;
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
      }
   }

   result.textContent = `${matches} matches found`
}
