class zarlal extends HTMLElement
{
    constructor()
    {
        super();

        this.innerHTML =
        `
            <style>
            h2{
                font-weight: 450;
                margin-bottom: 2.5rem;
            }
        
            .tailbar{
                font-weight: 300;
                font-size: 14px;
            }
        
            .ull{
                list-style-type: none;
                text-align: left;
                margin: 2.5rem 2rem;
                padding: 0rem 5rem;
                align-items: center;
                font-size: 13.5px;
                font-weight: 300;

                & li{
                    display: flex;
                    align-items: center;
                }
            
                & span{
                    margin-right: 1rem;
                    color: gold;
                }
            }
        
            </style>
            <!-- Garchig -->
            <h2>Read the best stories from industry leaders on <br> Medium.</h2>

            <!-- Tailbar -->
            <p class="tailbar">
                The author made this story available to Medium members only. 
                Upgrade to instantly <br> unlock this story plus other member-only benefits.
            </p>

            <!-- Jagsaalt -->
            <ul class="ull">
                <li>
                    <span class="material-symbols-outlined">star</span>
                    <p>Access all member-only stories on Medium</p>
                </li>
                <li>
                    <span class="material-symbols-outlined">star</span>
                    <p>Become an expert in your areas of interest</p>
                </li>
                <li>
                    <span class="material-symbols-outlined">star</span>
                    <p>Get in-depth answers to thousands of questions about technical</p>
                </li>
                <li>
                    <span class="material-symbols-outlined">star</span>
                    <p>Grow your career or build a new one</p>
                </li>
            </ul>
        `
    }
}
window.customElements.define('cus-zarlal', zarlal);