function filterMenu(category) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-tags').includes(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}