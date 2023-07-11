const recipes = ['../recipes/chilaquiles.html','../recipes/guacamole.html']

function scrollToTop(page){
    if ((window.innerHeight + window.pageYOffset) == window.innerHeight) {
        window.location.href = '../recipes/alpastore.html';
        console.log('top')}
}

function scrollElem1(page){
if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        window.location.href = '../recipes/guacamole.html';
        console.log('bottom');
    }

}

// function scrollElem2(page){
//     if( window.location.href = '../recipes/chilaquiles.html'){
//         if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
//             window.location.href = '../recipes/guacamole.html';
//             console.log('bottom');
//     }

// }}






// window.onscroll = function(ev) {
//     if ((window.innerHeight + window.scrollY) == document.body.offsetHeight) window.location = "recipe2.html";
// };

window.addEventListener("scroll", scrollElem1);
window.addEventListener("scroll",scrollToTop);
