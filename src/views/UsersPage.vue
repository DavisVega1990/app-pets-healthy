<template>
<ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Usuarios</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Usuarios</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ion-list>
        <ion-item v-for="(user, i) in users" :key="i">
            {{user.name}}
        </ion-item>
      </ion-list>
    </ion-content>
</ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {
IonContent, 
IonHeader,
IonMenuButton, 
IonPage, 
IonTitle, 
IonToolbar,
IonList,
IonItem,
onIonViewDidEnter,
IonButtons} from '@ionic/vue';
import { reactive } from "vue";
import UsersService from '@/services/users.service';

export default defineComponent({
    name: 'UsersPage',
    components: {
        IonContent, 
        IonHeader, 
        IonMenuButton, 
        IonPage, 
        IonTitle, 
        IonToolbar,
        IonList,
        IonItem,
        IonButtons
    },
    setup() {
        //Hooks
        onIonViewDidEnter(() => {
            getUsers();
        });
        const users: any[] = reactive([]);
        const getUsers = async () => {
            try {
                const response = await UsersService.getAll();
                const data = response.json;
                for (const user of data) {
                    users.push(user);
                }
            } catch(err) {
                users.push({
                    name: 'No hay usuarios que mostrar.'
                });
                console.log('Error getting users!');
            }
        };
        return {users, getUsers};
    }
});
</script>
<style scoped></style>