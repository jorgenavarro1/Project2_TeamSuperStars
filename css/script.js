document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundImage = `url(${item.getAttribute('data-image')})`;
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundImage = 'none';
    });
});
