const api = "https://api.jsonbin.io/v3/b/66459a1be41b4d34e4f47848";

class User
{
    constructor(user)
    {
        this.profile = user.profile;
        this.name = user.name;
        this.job = user.job;
        this.company = user.company;
    }

    render()
    {
        return `
        <cus-user profile="${this.profile}", name="${this.name}", job="${this.job}", company="${this.company}"></cus-user>
        `;
    }
}

class App
{
    constructor(targetid)
    {
        this.target = targetid;
    }

    init()
    {
         //fetchleed json oo avah
         fetch(api).then(response => response.json()).then(data => {
            //user-d datanii record buyu json-g hadgalah
            let user = data.record;
            let select = document.getElementById(this.target);

            //delgetsleh davtalt
            for(let j = 0; j < user.length; j++)
            {
                const tusers = new User(user[j]);
                select.insertAdjacentHTML('beforeend', tusers.render());
            }
        })
    }

}




// const users = [
//     {
//         "profile" : "assets/profile.png",
//         "name" : "Marc-André Giroux",
//         "job" : "Sr. Software Developer",
//         "company" : "Netflix"
//     },
//     {
//         "profile" : "assets/profile.png",
//         "name" : "Carlos Arguelles",
//         "job" : "Sr. Staff Engineer",
//         "company" : "Google"
//     },
//     {
//         "profile" : "assets/profile.png",
//         "name" : "Tony Yiu",
//         "job" : "Director",
//         "company" : "Nasdaq"
//     },
//     {
//         "profile" : "assets/profile.png",
//         "name" : "Brandeis Marshall",
//         "job" : "CEO",
//         "company" : "DataedX"
//     },
//     {
//         "profile" : "assets/profile.png",
//         "name" : "Cassie Kozyrkov",
//         "job" : "Sr. Software Developer",
//         "company" : "Google"
//     },
//     {
//         "profile" : "assets/profile.png",
//         "name" : "Memo Akten",
//         "job" : "Asst. Professor",
//         "company" : "UCSD"
//     },
//     {
//         "profile" : "assets/profile.png",
//         "name" : "Vitali Zaidman",
//         "job" : "Software Architect",
//         "company" : "Meta"
//     },
//     {
//         "profile" : "assets/profile.png",
//         "name" : "Camille Fournier",
//         "job" : "Head of Engineering",
//         "company" : "JPMorgan Chase"
//     }
// ]