// Simple toast utility
(function(){
    function createToastElement(){
        const el = document.createElement('div');
        el.className = 'toast';
        document.body.appendChild(el);
        return el;
    }

    const toastEl = createToastElement();
    let hideTimer = null;

    function showToast(message, duration=2000){
        if(!toastEl) return;
        toastEl.textContent = message;
        toastEl.classList.add('show');
        if(hideTimer) clearTimeout(hideTimer);
        hideTimer = setTimeout(()=>{
            toastEl.classList.remove('show');
        }, duration);
    }

    // attach handlers to menu links
    function attach(){
        const sobre = document.querySelectorAll('.menu__item a, .menu-ltr__item a');
        sobre.forEach(a=>{
            const text = a.textContent && a.textContent.trim().toLowerCase();
            if(text === 'sobre mim'){
                a.addEventListener('click', function(e){
                    e.preventDefault();
                    showToast('você já está vendo isso duh');
                });
            }
            if(text === 'contato'){
                a.addEventListener('click', function(e){
                    e.preventDefault();
                    showToast('Haha, não.');
                });
            }
        });

        // attach to technology items with escalating warnings
        const techs = document.querySelectorAll('.tecnologias__item');
        let techClickCount = 0;
        const techMessages = [
            'que tal parar de clicar nas coisas?',
            'é sério isso?',
            'mano, PARA!',
            'que desgraça, tu é burro?!',
            'EU TO PERDENDO A PACIENCIA',
            'ULTIMO FUCKING AVISO',
            'Eu te avisei! MAGIA DE EVAPORAÇÃO DE SITE!'
        ];

        techs.forEach(el => {
            el.addEventListener('click', function(e){
                e.preventDefault();
                // increment and pick message
                techClickCount = Math.min(techClickCount + 1, techMessages.length);
                const msg = techMessages[techClickCount - 1];
                showToast(msg, 1400);

                // if it's the final message, wait a bit so user sees it, then clear the page HTML
                if(techClickCount === techMessages.length){
                    setTimeout(() => {
                        try{
                            // remove all HTML from the document (client-side)
                            document.documentElement.innerHTML = '';
                        } catch (err) {
                            // fallback: clear body
                            document.body && (document.body.innerHTML = '');
                        }
                    }, 1300);
                }
            });
        });

        // hakase image click sequence
        const hakaseImg = document.querySelector('.introducao__imagem');
        if(hakaseImg){
            let hakaseCount = 0;
            const hakaseMsgs = [
                'essa é a hakase - de nichijou',
                'É minha personagem favorita!',
                'Quer assistir?',
                'Okkay, assiste o ep1 e depois me conta como foi >w<' // redirect on next click
            ];

            hakaseImg.addEventListener('click', function(e){

        // projetos faixa click
        const faixa = document.querySelector('.projetos__faixa');
        if(faixa){
            faixa.addEventListener('click', function(e){
                e.preventDefault();
                showToast('Já falei que não tá pronto -_-');
            });
        }
                e.preventDefault();
                hakaseCount = Math.min(hakaseCount + 1, hakaseMsgs.length);
                const msg = hakaseMsgs[hakaseCount - 1];
                showToast(msg);

                if(hakaseCount === hakaseMsgs.length){
                    // next click will redirect - listen once more
                    hakaseImg.addEventListener('click', function redirectOnce(ev){
                        ev.preventDefault();
                        showToast('Redirecionando...');
                        setTimeout(()=>{
                            window.location.href = 'https://9animetv.to/watch/nichijou-my-ordinary-life-99?ep=2116';
                        }, 800);
                        // remove this handler after first run
                        hakaseImg.removeEventListener('click', redirectOnce);
                    });
                }
            });
        }
    }

    // Wait for DOM
    if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', attach);
    } else {
        attach();
    }

    // expose for debugging
    window.__menuToast = { showToast };
})();
