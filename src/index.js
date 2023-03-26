import { galleryItems } from './js/gallery-items';
// ============================================================================================
const mainTags = document.querySelector('.js-continent-list');
const gallery = document.querySelector('.gallery');

mainTags.addEventListener('click', onMainTagsContainerclick);

function onMainTagsContainerclick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const currentactiveBtn = document.querySelector('.continent-list--active');
  if (currentactiveBtn) {
    currentactiveBtn.classList.remove('continent-list--active');
  }

  const nextActiveBtn = e.target;
  nextActiveBtn.classList.add('continent-list--active');

  const mainSelectedTags = nextActiveBtn.dataset.filter;
  console.log('mainSelectedTags:', mainSelectedTags);
  // ================ФУНКЦІЯ СОРТУВАННЯ ЗА КОНТИНЕНТАЛЬНОЮ ОЗНАКОМ============================
  const galleryList = gallery.querySelectorAll('.gallery__link');
  galleryList.forEach(item => {
    const flag = galleryItems[items.indexOf(item)];

    if (
      mainSelectedTags === 'all' ||
      flag.historicallyFormedRegionsOfTheEarth[mainSelectedTags]
    ) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// ============================================================================================

const tags = document.querySelector('.js-tags');
const selectedTags = new Set();

tags.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(e) {
  //ФУНКЦІЯ ДОДАВАННЯ АБО ЗНЯТТЯ КЛАСУ З КНОПОК ФІЛЬТРУ
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const btn = e.target;
  const tag = btn.dataset.value;
  const isActiveBtn = btn.classList.contains('tags__button--active');

  if (isActiveBtn) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  btn.classList.toggle('tags__button--active');

  console.log('selectedTags:', selectedTags);

  const galleryList = Array.from(document.querySelectorAll('.gallery__link'));
  //ТУТ ПОТРІБНО ЗРОБИТИ ФІЛЬТР ПО КНОПКАМ
  galleryList.forEach(item => {
    const index = galleryList.indexOf(item);
    const galleryItem = galleryItems[index];

    if (
      selectedTags.value === selectedTags.has(galleryItem.logo) ||
      selectedTags.has(galleryItem.colorPlacement)
    ) {
      item.style.display = 'none';
    } else {
      item.style.display = 'block';
    }
  });
}
// =============================ДОДАВАННЯ КАРТОК ПРАПОРІВ ДО HTML======================================================
const items = [];

galleryItems.forEach(element => {
  const galleryLink = document.createElement('a');
  galleryLink.className = 'gallery__link';
  galleryLink.href = element.original;
  const galleryImage = document.createElement('img');
  galleryImage.className = 'gallery__image';
  galleryImage.src = element.preview;
  galleryImage.setAttribute('title', element.SovereignStateFlags.ukrainian);
  galleryImage.alt = element.SovereignStateFlags.ukrainian;

  galleryLink.append(galleryImage);
  items.push(galleryLink);
});
gallery.append(...items);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

// =====================ПОТРІБНО ЗРОБИТИ ФУНКЦІЮ FIND ПО НАЗВІ КРАЇНИ ВВЕДЕНОЇ В ІНПУТ======================================
document.getElementById('search').addEventListener('click', () => {});
