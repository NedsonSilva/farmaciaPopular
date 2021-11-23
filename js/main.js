const userAvatar = document.querySelector('.user_conf_avatar')
const modal = document.querySelector('.login_container')
const mainElement = document.querySelector('main')

const toggleModal = () => modal.classList.toggle('active')

const removeModal = () => modal.classList.remove('active')

userAvatar.addEventListener('click', toggleModal)

mainElement.addEventListener('click', removeModal)
