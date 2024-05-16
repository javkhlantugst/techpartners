class headerProfileDrop extends HTMLElement
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
        

        
        /* Profile deer darval unah hesgiin css */
        .menu-profile-unalt{
            display: none;
            width: 17rem;
            position: absolute;
            z-index: 1;
            right: 0;
            margin: 0.75rem 1rem 1rem 0rem;
            box-shadow: 0px 1px 3px 0.1px var(--grey);
        }
        
        /* Unaj ireh hesgiin dotorh css */
        .profile-unalt-sec{
            padding: 0.5rem 0.2rem;
            font-size: 14px;
            border-bottom: 0.2px solid var(--grey);
        
            & ul{
                padding-left: 0;
            }
        
            & .icon{
                display: flex;
                align-items: center;
                margin-left: 1rem;
            }
        
            & p{
                margin-left: 0.8rem;
            }
            
            & a:hover{
                color: black;
            }
        
            & .sign-out{
                padding: 0rem 2rem;
            }
        
        }
        </style>
        
                        <!-- Button daragdval unaj ireh heseg -->
                        <div class="menu-profile-unalt" id="profile-drop">
                            <!-- Profile section -->
                            <div class="profile-unalt-sec">
                                <ul>
                                    <li>
                                        <a href="https://medium.com/@javkhlantugst" class="icon">
                                            <span class="material-symbols-outlined">person</span>
                                            <p>Profile</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://medium.com/me/lists"  class="icon">
                                            <span class="material-symbols-outlined">bookmarks</span>
                                            <p>Library</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://medium.com/me/stories/drafts"  class="icon">
                                            <span class="material-symbols-outlined">description</span>
                                            <p>Stories</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://medium.com/me/stats"  class="icon">
                                            <span class="material-symbols-outlined">signal_cellular_alt</span>
                                            <p>Stats</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
    
                            <!-- Settings section -->
                            <div class="profile-unalt-sec">
                                <ul>
                                    <li>
                                        <a href="https://medium.com/me/settings" class="icon">Settings</a>
                                        
                                    </li>
                                    <li>
                                        <a href="https://medium.com/me/following" class="icon">Refine recommendations</a>
                                    </li>
                                    <li>
                                        <a href="https://medium.com/me/settings/publishing#managePublications" class="icon">Manage publications</a>
                                    </li>
                                    <li>
                                        <a href="https://help.medium.com/hc" class="icon">Help</a>
                                    </li>
                                </ul>
                            </div>
    
                            <!-- Member section -->
                            <div class="profile-unalt-sec">
                                <ul>
                                    <li>
                                        <a href="https://medium.com/plans" class="icon">Become a Medium member</a>
                                    </li>
                                    <li>
                                        <a href="https://medium.com/mastodon" class="icon">Create a Mastodon account</a>
                                    </li>
                                    <li>
                                        <a href="https://medium.com/verified-authors" class="icon">Apply for author verification</a>
                                    </li>
                                    <li>
                                        <a href="https://medium.com/partner-program" class="icon">Apply to the Partner Program</a>
                                    </li>
                                    <li>
                                        <a href="https://medium.com/gift-plans" class="icon">Gift a membership</a>
                                    </li>
                                </ul>
                            </div>
    
                            <!-- Sign out -->
                            <div class="profile-unalt-sec">
                                <a href="" class="sign-out">Sign out</a>
                            </div>
                        </div>
        `
    }

}
window.customElements.define('header-drop', headerProfileDrop);