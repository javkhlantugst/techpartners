class post extends HTMLElement
{
    constructor()
    {
        super();

        this.innerHTML = `

        <!--Google Fonts-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

        <!--Google Icon-->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0" />

        <style>
        /* Garchignii heseg */
        .garchignuud{
        
            & .member-only{
                margin: 2.5rem 0rem;
                display: flex;
                align-items: center;
                font-size: 15px;
                font-weight: 200;
        
            }
        
            & .mini-garchig{
                font-weight: 200;
            }
        
            & .gol-garchig{
                font-size: 40px;
                font-weight: 900;
                margin: 0.8rem 0rem;
            }
        
            & h4{
                font-weight: 300;
                columns: var(--grey);
            }
        
        }
        
        /* Main deer bairlah profile-nii heseg */
        .profile-main{
            margin: 1.7rem 0rem;
            display: flex;
            align-items: center;
        
            & img{
                height: 4rem;
                border: none;
                padding: 0;
                background-color: none;
                border-radius: 50%;
            }
        
            & img:hover{
                opacity: 0.8;
            }
        }
        
        .profile-name{
            display: block;
        
            & .post-date{
                margin-left: 1rem;
                color: var(--grey);
                font-size: 13px;
            }
        }
        
        /* Ner bolon follow button */
        .profile-link{
            display: flex;
            align-items: center;
            margin-left: 1rem;
            padding-bottom: 0.4rem;
        
            & a{
                color: var(--black);
            }
        
            & button{
                background-color: white;
                border: none;
                color: green;
                font-size: 15.5px;
            }
        
            & button:hover{
                color: rgb(0, 81, 0);
            }
        }
        
        .profile-name:hover .profile-unalt{
            display: block;
        }
        
        /* Hover hiivel unaj ireh heseg */
        .profile-unalt{
            width: 17rem;
            display: none;
            position: absolute;
            left: 16%;
            background-color: white;
            padding: 1rem;
        
            & img {
                height: 3rem;
            }
        
            & div {
                display: flex;
                align-items: center;
                font-size: 16px;
                justify-content: space-around;
            }
        
            & a{
                color: black;
            }
        
            & .detail {
                padding: 1rem 0rem;
                font-size: 12px;
                font-weight: 300;
                border-bottom: 0.2px solid var(--grey);
            }
        
            & section{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 0rem;
                font-size: 14px;
        
            }
        
            & button{
                width: 4rem;
                background-color: green;
                color: white;
                border: none;
                border-radius: 5px;
            }
        }
        
        /* Clap hiih bolon save share hiih section */
        .clap-sec{
            display: flex;
            border-bottom: 0.2px solid var(--grey);
            border-top: 0.2px solid var(--grey);
            align-items: center;
            justify-content: space-between;
            padding: 0.3rem 0rem;
            color: var(--grey);
        
            & button{
                border: none;
                background-color: white;
                align-items: center;
                color: var(--grey);
                padding: 0px 3px;
            }
        
            & button:hover{
                color: var(--black);
            }
        
        }
        
        .clap-resp{
            display: flex;
            font-size: 13px;
        }
        
        .cr{
            display: flex;
            align-items: center;
            margin-right: 1rem;
        
            & span{
                padding-top: 5px;
            }
        }
        
        
        /* Niitleliin heseg */
        article{
            padding: 3.2rem 0rem;
        
            & img{
                width: 100%;
            }
        
            & .reference{
                margin-bottom: 2rem;
                text-align: center;
                color: var(--grey);
                font-weight: 200;
                font-size: 14px;
            }
        
            & p{
                font-size: 19px;
                margin-bottom: 1.5rem;
                font-weight: 300;
            }
        }
        </style>

        <!-- Niitleliin heseg -->
        <div>

            <!-- Garchig -->
            <div class="garchig-heseg">
                <!-- Garchignuud -->
                <div class="garchignuud">
                    <p class="member-only">
                        <span class="material-symbols-outlined" class="star" >star</span>
                        Member-only story
                    </p>
                    <p class="mini-garchig">THE SOFTWARE WORLD</p>
                    <p class="gol-garchig">Is Flutter Facing its End?</p>
                    <h4>Is Flutter Still Fulfilling its Purpose at Google?</h4>
                </div>

                <!-- Profile heseg -->
                <section class="profile-main">
                    <!-- Zurag -->
                    <img src="assets/profile-pic.png" alt="Profile Picture">

                    <!-- Ner(profile ruu usrelt hiih, follow hiih heseg)-->
                    <div class="profile-name">

                        <div class="profile-link">
                            <a href="https://medium.com/@javkhlantugst">Elye - A One Eye Developer  &nbsp;-</a>
                            <button>Follow</button>
                        </div>

                        <!-- Hover hiihed unaj ireh heseg -->
                        <div class="profile-unalt">
                            <!-- Profile -->
                            <div>
                                <img src="assets/profile-pic.png" alt="Profile Picture">
                                <a href="https://medium.com/@javkhlantugst">Elye - A One Eye Developer</a>
                            </div>
                            <p class="detail">
                                Sharing Software Development Experience, focus on Mobile.
                                 https://elye-project.medium.com/subscribe 
                                 https://twitter.com/elye_project
                            </p>   
                            
                            <!-- Follow heseg -->
                            <section>
                                <p>67K Followers</p>
                                <button>Follow</button>
                            </section>
                            
                        </div>

                        <p class="post-date" >7 min read - 4 days ago</p>
                    </div>

                </section>
            </div>

            <!-- Clap bolon respond-iin heseg -->
            <div class="clap-sec">
                <div class="clap-resp">
                    <!-- Clap-nii heseg -->
                    <div class="cr">
                        <button>
                            <span class="material-symbols-outlined">handshake</span>
                        </button>
                        <p>0</p>
                    </div>
    
                    <!--  Respond-nii heseg -->
                    <div class="cr">
                        <button>
                            <span class="material-symbols-outlined">chat_bubble</span>
                        </button>
                        <p>10</p>
                    </div>
                </div>

                <!-- Olon button baigaa heseg -->
                <div>
                        
                    <!-- Save button -->
                    <button>
                        <span class="material-symbols-outlined">bookmark</span>
                    </button>

                    <!-- Listen button -->
                    <button>
                        <span class="material-symbols-outlined">play_circle</span>
                    <button>

                    <!-- Share button -->
                    <button>
                        <span class="material-symbols-outlined">ios_share</span>
                    </button>

                    <!-- More button -->
                    <button>
                        <span class="material-symbols-outlined">more_horiz</span>
                    </button>
                </div>
                
            </div>

            <!-- Niitleliin heseg-->
            <article>

                <!--Niitleliin zurag-->
                <img src="assets/photo.png" alt="Niitleliin zurag">
                <p class="reference">Photo by Federico Di Dio photography on Unsplash</p>

                <!--Niitleliin tailbar-->
                <p>
                    Let me begin by apologizing if the title rubbed you the wrong way. 
                    I’ve always been a fan of Google’s products, especially their efforts in mobile development.
                </p>

                <p>
                    When it comes to popular cross-platform mobile development frameworks like Xamarin, React Native, and Flutter, my preference leans strongly towards Flutter. 
                    This preference is partly due to Google’s involvement and partly due to the growing popularity of Flutter, as evidenced by recent statistics on Stack Overflow 
                    questions asked.
                </p>

                <img src="assets/stats.png" alt="Stats">
                <p class="reference">https://insights.stackoverflow.com/trends?tags=react-native%2Cflutter%2Cionic-framework%2Cxamarin</p>

                <p>
                    However, there has been an unexpected development recently: Google has laid off teammates from the Flutter and Dart teams (source). 
                    This came as a surprise to me and prompted me to ponder the possible reasons behind it.
                </p>

                <p>
                    It doesn’t appear to be a broad restructuring, as it seems to have affected only specific areas. 
                    This suggests a prioritization of investments and a gradual divestment strategy, as indicated by Google spokesperson Alex García-Kummert: 
                    “As we’ve said, we’re responsibly investing in our company’s biggest priorities and…
                </p>


            </article>
        </div>
        `
    }
}
window.customElements.define('cus-post', post);