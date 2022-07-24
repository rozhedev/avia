const loadmore = document.querySelector('#loadmore');
let currentItems = 2;
if (loadmore) {
    loadmore.addEventListener('click', (e) => {

        const elementList = document.querySelectorAll('.aside-comment');
        for (let i = currentItems; i < currentItems + 3; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'block';
            }
        }
        currentItems += 3;

        if (currentItems >= elementList.length) {
            e.target.style.display = 'none';
        }
    })
}