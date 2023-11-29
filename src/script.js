let isMenuOpen = false;

const menuButton = document.getElementById('menuButton');
const openIcon = document.getElementById('openIcon');
const closeIcon = document.getElementById('closeIcon');
const menuItems = document.getElementById('menuItems');

menuButton.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    openIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    menuItems.classList.remove('hidden');
  } else {
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    menuItems.classList.add('hidden');
  }
});

function downloadFile(filePath) {
  // Create a link element
  var link = document.createElement('a');
  link.href = filePath;

  // Specify that it is a download link
  link.download = 'downloaded-file.pdf';

  // Append the link to the document
  document.body.appendChild(link);

  // Trigger the click event to start the download
  link.click();

  // Remove the link from the document
  document.body.removeChild(link);
}
