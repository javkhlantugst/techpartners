class header extends HTMLElement
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
        header{
            height: 4rem;
            display: grid;
            grid-template-columns: 20% 20%;
            gap: 60%;
            border-bottom: 0.2px solid var(--grey);
            
            & a{
                color: var(--grey);
            }
        
            & ul{
                list-style-type: none;
            }
        }
        
        /* header-iin zuun tal (logo bolon search bar)*/
        .header-left{
            display: flex;
            align-items: center;
            
            & img{
                height: 3rem;
                margin: 0rem 1rem 0rem 2rem;
            }
        
            & input{
                height: 2rem;
                border: none;;
                background-color: var(--grey-background);
                border-radius: 1rem;
                width: 11rem;
                padding-left: 1rem;
                font-size: 12px;
                
            }
        }
        
        /* header-iin baruun tal (write, notification, profile)*/
        .header-right{
            display: flex;
            align-items: center;
            padding-left: 3.5rem;
        }
        
        /* header-iin baruun tal ul tag */
        .header-right-ul{
            display: flex;
            align-items: center;
            font-size: 0.9rem;
            font-weight: 300;
            padding-left: 0;
        
            /* icon-uudin css */
            & span{
                font-size: 1.7rem;
                font-weight: 300;
            }
        
            & button{
                height: 2rem;
                border: none;
                padding: 0;
                background-color: none;
                border-radius: 50%;
            }
        
            & img{
                height: 100%;
                border-radius: 50%;
            }
        
            & li{
                margin: 1rem;
            }
        
            & a:hover{
                color: black;
            }
        
            & img:hover{
                background-color: black;
                opacity: 0.6;
            }
        }
        
        /* Write icon-ii css */
        .write-icon{
            display: flex;
            align-items: center;
        
            & p{
                margin-left: 0.5rem;
            }
        }
        
       
        </style>
        <!-- Header menu-nii heseg -->
        <header>
    
            <!-- Logo bolon search -->
            <div class="header-left">
                <img src="assets/logo.png" alt="Logo">
                <input type="search" placeholder="Search">
            </div>
    
            <!-- Menu-nii baruun heseg (Post write, Notification, Profile) --> 
            <div class="header-right">
                <ul class="header-right-ul">
    
                    <!-- Post write -->
                    <li>
                        <a href="https://medium.com/new-story" class="write-icon">
                            <span class="material-symbols-outlined">edit_square</span>
                            <p>Write</p>
                        </a>
                    </li>
    
                    <!-- Notification -->
                    <li>
                        <a href="https://medium.com/me/notifications">
                            <span class="material-symbols-outlined">notifications</span>
                        </a>
                    </li>
    
                    <!-- Profile -->
                    <li>
                        <button onclick="profiledrop()" id="profile-btn">
                            <img src="assets/profile.png" alt="Profile picture">
                        </button>
    
                        <!-- Button daragdval unaj ireh heseg -->
                        <header-drop></header-drop>
                    </li>
                </ul>
                <script src="js/menu-profile-drop.js"></script>
            </div>
    
        </header>
        `
    }

}
window.customElements.define('cus-header', header);