
const getUsers = async() => {
    const res = await fetch('https://reqres.in/api/users')
    const usersData = await res.json()
    const usersArray = usersData.data
    console.log(usersArray)

    usersArray.forEach((el, index) => {

        const containerDiv = document.createElement('div')
        const usersInfo = document.createElement('div')
        const imagesDiv = document.createElement('div')
        const img = document.createElement('img')
        const button = document.createElement('button')
        button.classList.add('btn')



        button.textContent = 'DELETE USER'


        



        const firstName = document.createElement('p')
        firstName.textContent = el.first_name

        const lastName = document.createElement('p')
        lastName.textContent = el.last_name;

        const email = document.createElement('p')
        email.textContent = el.email;

        img.src = el.avatar

        usersInfo.append(firstName, lastName, email, button)

        containerDiv.append(usersInfo, imagesDiv)
        imagesDiv.append(img)


        document.body.append(containerDiv)
        imagesDiv.classList.add('user-image')
        containerDiv.classList.add('Users')
        usersInfo.classList.add('user-info')



        button.addEventListener('click', () => {
            deleteUsers(el.id, containerDiv.remove())
        })



        const deleteUsers = async (id, node) => {
            const res = await fetch(`https://reqres.in/api/users/${id}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type" : 'application/json'
                }
            })
            if(el.id === button[index]){
               node.remove()
            }
            
        }





    })
}
getUsers()
