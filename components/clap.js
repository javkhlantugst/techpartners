class clap extends HTMLElement
{
    constructor()
    {
        super();

        this.innerHTML = 
        `
        <!-- Clap section -->
        <div class="clap-sec" style="border: none;">
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
        `
    }
}
window.customElements.define('cus-clap', clap);