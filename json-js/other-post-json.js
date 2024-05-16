const p_api = "https://api.jsonbin.io/v3/b/6645a71dacd3cb34a848a7ba";

class otherPost
{
    constructor(post)
    {
        this.picture = post.picture;
        this.profile = post.profile;
        this.name = post.name;
        this.garchig = post.garchig;
        this.detail = post.detail;
        this.min = post.min;
        this.date = post.date;
    }

    Render()
    {
        return`
        <article class="busad-niitlel">
            <img src="${this.picture}" alt="picture">

            <div class="n-busad">
                <img src="${this.profile}" alt="Profile picture">
                <p>${this.name}</p>
            </div>

            <p class="b-garchig">${this.garchig}</p>

            <p class="b-detail">${this.detail}</p>
            <p class="b-date"><span class="material-symbols-outlined">star</span> &nbsp - &nbsp ${this.min} read &nbsp - &nbsp ${this.date}</p>

            <div class="b-clap">
                <div class="b-asec">
                    <!-- Clap-nii heseg -->
                    <button class="b-btn">
                        <span class="material-symbols-outlined">handshake</span>
                        <p>0</p>
                    </button>
        
                    <!--  Respond-nii heseg -->
                    <button class="b-btn">
                        <span class="material-symbols-outlined">chat_bubble</span>
                        <p>10</p>
                     </button>
                </div>
                        
                <div>
                    <!-- Save button -->
                    <button>
                        <span class="material-symbols-outlined">bookmark</span>
                    </button>

                    <!-- More button -->
                    <button>
                        <span class="material-symbols-outlined">more_horiz</span>
                    </button>
                </div>
            </div>
        </article>  
        `;
    }
}

class postApp
{
    constructor(targetid)
    {
        this.target = targetid;
    }

    init()
    {
        fetch(p_api).then(response => response.json()).then(data => {
            let post = data.record;
            let select = document.getElementById(this.target);

            for(let i = 0; i<post.length; i++)
            {
                const opost = new otherPost(post[i]);
                select.insertAdjacentHTML('beforeend', opost.Render());
            }
        })
    }
}


// const post = [
//     {
//         "picture": "assets/cherry.png",
//         "profile": "assets/profile-pic.png",
//         "name": "Elye - A One Eye Developer",
//         "garchig": "The Three Temptations for Developers",
//         "detail": "It feels good at first, then the stink may come later",
//         "min": "6 min",
//         "date": "Apr 16,2024"
//     },
//     {
//         "picture": "assets/post-two.png",
//         "profile": "assets/profile-pic.png",
//         "name": "Elye - A One Eye Developer",
//         "garchig": "Software KPIs Are Not Meant to Penalize Developers",
//         "detail": "Don’t Abuse KPIs; Use It For Actual Purpose",
//         "min": "9 min",
//         "date": "Apr 22,2024"
//     },
//     {
//         "picture": "assets/post-three.png",
//         "profile": "assets/profile-pic.png",
//         "name": "Elye - A One Eye Developer",
//         "garchig": "Load Fragments in Jetpack Compose",
//         "detail": "An experience from unworkable solutions to ",
//         "min": "10 min",
//         "date": "Jun 24,2022"
//     },
//     {
//         "picture": "assets/post-four.png",
//         "profile": "assets/profile-pic.png",
//         "name": "Elye - A One Eye Developer",
//         "garchig": "Compare ChatGPT, Google’s Bard Gemini, and Meta’s Llama ",
//         "detail": "Comparing Advice from Three Generative AIs: OpenAI, Google",
//         "min": "9 min",
//         "date": "May 2,2024"
//     }
// ]