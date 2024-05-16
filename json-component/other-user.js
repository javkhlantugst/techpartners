class Users extends HTMLElement
{
    constructor()
    {
        super();

        this.myRoot = this.attachShadow({ mode : "open" });

        this.profile = this.getAttribute("profile");
        this.name = this.getAttribute("name");
        this.job = this.getAttribute("job");
        this.company = this.getAttribute("company");
        this.#Render();
    }

    #Render()
    {
        this.myRoot.innerHTML = 
        
        `
        <style>
        section{
            & img{
                height: 4rem;
                border-radius: 50%;
            }
        
            & h5{
                font-weight: 400;
                padding: 0;
                margin: 0;
            }
        
            & p{
                font-size: 10px;
                color: var(--grey);
                margin: 0.1rem;
            }
        }
        </style>

        <section>
            <img src="${this.profile}" alt="Profile picture">
            <h5>${this.name}</h5>
            <p>${this.job}</p>
            <p>${this.company}</p>
        </section>
        
        `
    }

    static get observedAttributes()
    {
        return ["profile", "name", "job", "company"];
    }


}

window.customElements.define('cus-user', Users);