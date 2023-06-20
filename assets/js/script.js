const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    if(displayWidth){
        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;

    }
}

window.addEventListener('resize', slideImage);


let navtabs = document.querySelectorAll('.sliderTab');
if(navtabs){
    navtabs.forEach(item => {
        item.addEventListener('click', function(event){
            if(event.target.classList.contains('nav-item')){
                let lastActive = item.querySelector('li.active');
                let newActive = event.target;
                let bgActive = item.querySelector('.bg-active');
    
                lastActive.classList.remove('active');
                newActive.classList.add('active');
                bgActive.style.left = newActive.offsetLeft + 'px';
    
                let lastContentActive = item.querySelector('.tab.active');
                let newContentActive = document.getElementById(newActive.dataset.target);
                lastContentActive.classList.remove('active');
                newContentActive.classList.add('active');
            }
        })
    })
}

$(document).ready(function () {
    $('#dataTable').DataTable({
     "ordering": false, // false to disable sorting (or any other option)
     "lengthMenu": [[5,10, 25, 50, -1], [5,10, 25, 50, "All"]]
    });
    $('.dataTables_length').addClass('bs-select');
});
