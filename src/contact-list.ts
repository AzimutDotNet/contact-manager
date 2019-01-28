import { inject } from 'aurelia-dependency-injection';
import { WebAPI } from './web-api';

@inject(WebAPI)
export class ContactList{
    contacts;
    selectedId = 0;
    constructor(
        private api: WebAPI
    ){}

    created(){
        this.api.getContactList().then(contacts => this.contacts = contacts);
    }
    select(contact){
        this.selectedId = contact.id;
        return true;
    }
}