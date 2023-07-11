 
        
        //POPUP WRAPPER
        const jajajaWrapper = document.querySelector('.jajaja-wrapper');
        const zIndex = 1;

        function openWrapper() {
            jajajaWrapper.style.display = 'block';
            bringToFront(popup);
        }

        function closeWrapper() {
          jajajaWrapper.style.display = 'none';
        }








// MODAL ALLRECIPE

const openModalAllRecipeBtn = document.querySelector('#open-modal-all-recipe')
const closeModalAllRecipeBtn = document.querySelector('.modal-all-recipe-close-btn')
const modalAllRecipeWrapper = document.querySelector(".modal-all-recipe-wrapper"),
ModalAllRecipeHeader = modalAllRecipeWrapper.querySelector(".modal-all-recipe-header");

function openAllRecipeModal() {
    modalAllRecipeWrapper.style.display = 'block';
    bringToFront(popup);
};

function closeAllRecipeModal() {
    modalAllRecipeWrapper.style.display = 'none';
};

openModalAllRecipeBtn.addEventListener('click', openAllRecipeModal);
closeModalAllRecipeBtn.addEventListener('click',closeAllRecipeModal);

// CHANGE VUE OF POPUP






// MODAL SOCIAL

const modalSocialWrapper = document.querySelector(".modal-social-wrapper"),
ModalSocialHeader = modalSocialWrapper.querySelector(".modal-social-header");

function openSocialModal() {
    modalSocialWrapper.style.display = 'block';
};

function closeSocialModal() {
    modalSocialWrapper.style.display = 'none';
};

openModalSocialBtn.addEventListener('click', openSocialModal);
closeModalSocialBtn.addEventListener('click',closeSocialModal);


// MODAL PACMAN



const openModalPacmanBtn = document.querySelector('#open-modal-pacman')
const closeModalPacmanBtn = document.querySelector('#pacman-close-btn')
const modalPacmanWrapper = document.querySelector(".popup-pacman-wrapper"),
modalPacmanHeader = modalPacmanWrapper.querySelector(".modal-pacman-header");


function openPacmanModal() {
    modalPacmanWrapper.style.display = 'block';
    bringToFront(popup);
};

function closePacmanModal() {
    modalPacmanWrapper.style.display = 'none';
};

openModalPacmanBtn.addEventListener('click', openSocialModal);
closeModalPacmanBtn.addEventListener('click',closeSocialModal);


// MODAL HOW IT WORKS 

const hIWModal = document.querySelector('.modal-recipe-howto-wrapper');
const openHIWModal = document.querySelector('.question-mark-icon');
const closeHIWModal = document.querySelector('.modal-recipe-howto-closer');


openHIWModal.addEventListener("click", () => {
    hIWModal.style.display = 'block';
    bringToFront(popup);});

closeHIWModal.addEventListener('click',() =>{
    hIWModal.style.display = 'none';
})





















