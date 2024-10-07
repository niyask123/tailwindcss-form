// Accordion start
function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const icon = document.getElementById(`icon-${index}`);

  content.classList.toggle("hidden");

  icon.classList.toggle("rotate-180");
}
// Accordion end
