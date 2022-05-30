const myApp = new Vue({
    el: "#app",
    data: {
        activeContact: "0", /** indica l'indice dell'utente attivo */
        newMessageText: "", /** indica il testo inserito nell'input dei messaggi */
        contactResearch: "", /** indica il testo inserito nell'input della ricerca contatti */
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/profile_pic_1.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/profile_pic_2.png',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/profile_pic_3.png',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: 'img/profile_pic_4.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: 'img/profile_pic_5.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: 'img/profile_pic_6.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: 'img/profile_pic_7.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: 'img/profile_pic_8.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
    },
    methods: {
        // quando clicco nella lista contatti, l'indice corrispondente al contatto su cui clicco diventa il mio activeContact
        showMessages(index){
            this.activeContact = index;
        },
        // quando premo invio dall'input nuovo messaggio, creo un nuovo oggetto che pusho nell'array dei messaggi del mio activeContact
        addNewMessage(){
            // creo una nuova data
            const now = new Date();

            // se il mese è di una sola cifra aggiungo uno 0 per farlo diventare di due cifre, così so che l'ora del messaggio sarà dall'indice 11 all'indice 15 della stringa della proprietà date nell'array dei messaggi
            // inoltre compongo una nuova stringa formattata esattamente come nel mio array contacts
            // in alternativa si può usare toLocalString() ed eliminare la virgola che separa la data dall'ora
            let myDate = "";
            if (now.getMonth() < 10){
                myDate = now.getDate() + "/" + "0" + (now.getMonth() + 1) + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            } else {
                myDate = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            }
            
            // creo un nuovo oggetto che ha come proprità date la nuova data, come message la stringa presa dall'input, e status 'sent'
            const newMessage = {
                date: myDate,
                message: this.newMessageText,
                status: 'sent'
            }
            // pusho l'oggetto nell'array dei messaggi di activeContact
            this.contacts[this.activeContact].messages.push(newMessage);
            // resetto la variabile collegata all'input
            this.newMessageText= "";

            // dopo un secondo parte la funzione che genera la risposta in modo analogo
            setTimeout(this.autoAnswer, 1000);
        },
        // genera una risposta automatica
        autoAnswer(){
            const now = new Date();

            let myDate = "";
            if (now.getMonth() < 10){
                myDate = now.getDate() + "/" + "0" + (now.getMonth() + 1) + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            } else {
                myDate = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            }
            
            const answer = {
                date: myDate,
                message: "ok",
                status: 'received'
            }
            this.contacts[this.activeContact].messages.push(answer);
        },
        // ad ogni lettera inserita nell'input di ricerca contatti, confronta il valore dell'input con le iniziali del nome di ciascun contatto e cambia la proprietà visible in false se non corrispondono
        showResearchedContacts(){
            this.contacts.forEach((contact)=>{
                // creo una copia del valore in input con l'iniziale maiuscola cosi la ricerca funziona anche se in input si inseriscono solo caratteri minuscoli
                const newContactResearch = this.contactResearch.charAt(0).toUpperCase() + this.contactResearch.slice(1);
                if (contact.name.startsWith(newContactResearch) || contact.name.startsWith(this.contactResearch)) contact.visible = true;
                else contact.visible = false;
            })
        },
        // cancella il messaggio corrispondente all'indice che gli passo
        deleteMessage(index){
            this.contacts[this.activeContact].messages.splice(index, 1);
        }
    }
});