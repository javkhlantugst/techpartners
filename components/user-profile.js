class userProfile extends HTMLElement
{
    constructor()
    {
        super();

        this.innerHTML = 
        `
        <style>
        /* Niitlegchiin heseg */
        .niitlegch{
            margin: 4rem 0rem 0rem 0rem;
            border-top: 0.2px solid var(--grey);
            padding: 4rem 0rem 2rem 0rem;
            display: grid;
            grid-template-columns: auto auto;
        
            & img{
                height: 4rem;
                border-radius: 50%;
            }    
        } 
        
        .item1{
        
            & h2{
                font-weight: 500;
                margin: 1rem 0rem 0.7rem 0rem;
            }
        
            & a{
                color: var(--grey);
                font-weight: 300;
            }
        
            & p{
                margin: 0.8rem 0rem;
                font-size: 14px;
                color: var(--grey);
                font-weight: 400;
            }
            
        }
        
        .item2{
            display: flex;
            list-style-type: none;
            align-items: center;
        
            & button{
                background-color: green;
                color: white;
                border: none;
                font-size: 14px;
                font-weight: 400;
                height: 2.4rem;
                margin-left: 0.5rem;
            }
            
            & button:hover{
                background-color: rgb(1, 100, 1);
            }
        
            & .flw-btn{
                width: 5rem;
                border-radius: 20px;
            }
        
            & .mini-btn{
                border-radius: 50%;
                width: 2.4rem;
                padding-top: 5px;
            }
        
            & span{
                font-size: 18px;
                
            }
        }
        </style>
        <div class="niitlegch">

            <div class="item1">
                <img src="assets/profile-pic.png" alt="Profile Picture">
                <h2>Written by Elye - A One Eye Developer</h2>
                <a href="https://elye-project.medium.com/followers">67K Followers</a>
                <p>
                    Sharing Software Development Experience, focus on Mobile. 
                    https://elye-project.medium.com/subscribe
                     https://twitter.com/elye_project
                </p>
            </div>
            

            <ul class="item2">
                <li>
                    <button class="flw-btn">Follow</button>
                </li>
                <li>
                    <button class="mini-btn">
                        <span class="material-symbols-outlined">mail</span>
                    </button>
                </li>
                <li>
                    <button class="mini-btn">
                        <span class="material-symbols-outlined">volunteer_activism</span>
                    </button>
                </li>
            </ul>
        </div>
        `
    }
}

window.customElements.define('cus-userprofile', userProfile);