<template>
<ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Inicio</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ion-card>
        <ion-card-header>
            <ion-card-title style="text-align: center">Inicia sesión</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <ion-item>
                <ion-label position="floating">Correo</ion-label>
                <ion-input name="email" v-model="user.email"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Contraseña</ion-label>
                <ion-input autocomplete="off" type="password" name="password" v-model="user.password"></ion-input>
            </ion-item>
            <ion-item>
                <ion-button color="primary" style="margin: 0 auto" @click="onLogin()">Iniciar sesión</ion-button>
            </ion-item>
        </ion-card-content>
      </ion-card>
    </ion-content>
</ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { IonCard, 
IonCardHeader, 
IonCardTitle, 
IonCardContent, 
IonContent, 
IonHeader,
IonMenuButton, 
IonPage, 
IonTitle, 
IonToolbar,
IonItem,
IonInput,
IonLabel,
IonButton,
IonButtons} from '@ionic/vue';
import { reactive } from "vue";
import { useRouter } from 'vue-router';
import UsersService from "@/services/users.service";

export default defineComponent({
    name: 'HomePage',
    components: {
        IonCard, 
        IonCardHeader, 
        IonCardTitle, 
        IonCardContent, 
        IonContent, 
        IonHeader, 
        IonMenuButton, 
        IonPage, 
        IonTitle, 
        IonToolbar,
        IonItem,
        IonInput,
        IonLabel,
        IonButton,
        IonButtons
    },
    setup() {
        const router = useRouter();
        const onLogin = async () => {
            try {
                const response = await UsersService.login(user);
                let data = response.json;
                //redirect to users page
                router.push('/users');
            } catch(err) {
                console.log(user)
                console.log('Login error!');
            }
        };

        const user = reactive({
            email: '',
            password: ''
        });
        return {user, onLogin};
    }
});
</script>
<style scoped>

</style>