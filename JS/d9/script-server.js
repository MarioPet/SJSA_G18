//First patr: Get the info from server

let userObject

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(dataUsers => {

        get_usable_user_data(dataUsers)

    })




//userData = getUserData("https://jsonplaceholder.typicode.com/users")


function get_usable_user_data(data) {
    console.log(data)

    let arrayAddress = (Object.values(data[0].address))
    let userAddress = (arrayAddress[2] + ' City, ' + arrayAddress[0] + ' street, ' + arrayAddress[1])

    let userName = data[0].name
    let userEmail = data[0].email
    let userWebsite = data[0].website
    let array = []

    for (let i = 0; i < data.length; i++) {

        arrayAddress = (Object.values(data[i].address))
        userAddress = (arrayAddress[2] + ' City, ' + arrayAddress[0] + ' street, ' + arrayAddress[1])
    
        userName = data[i].name
        userEmail = data[i].email
        userWebsite = data[i].website



       
       
        array[i] = [userName,userAddress,userEmail,userWebsite]
    }

   

    





    console.log(array)
}
    //Kreiraj karta za:
    //ime
    //ptrximr
    //email
    //website
    //adresa na ziveenje


    //mi treba data[x].adress



