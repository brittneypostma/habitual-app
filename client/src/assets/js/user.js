function createUserTemplate(user) {
  const template = document.querySelector('#user')
  const content = template.content.cloneNode(true)
  const avatar = content.querySelector('.avatar')
  const authLink = content.querySelector('.auth-link')
  if (!user) {
    authLink.href = `/auth/google`
    authLink.innerText = `Log in`
  } else {
    authLink.href = `/auth/logout`
    authLink.innerText = `Log out`
  }
  avatar.src = user.image
  avatar.alt = `${user.firstName} ${user.lastName}` || `Habitual Avatar`
  return content
}

async function loadAvatar() {
  const auth = document.querySelector('.auth')
  const user = await fetch('/auth/user')
    .then((res) => res.json())
    .catch((e) => console.error(e))
  auth.appendChild(createUserTemplate(user))
}

loadAvatar()
