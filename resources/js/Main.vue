<template>
    <v-app id="inspire">
        <div v-if="authenticated">
            <v-system-bar app color="blue" height="25">
                <v-spacer></v-spacer>
                <v-btn class="white--text" text small> Ajuda </v-btn>
            </v-system-bar>

            <v-app-bar app color="grey lighten-2" height="75" >
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-spacer></v-spacer>
                <v-btn text v-on:click="logout"> LOGOUT </v-btn>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" fixed app width="200">
                <v-list dense>
                    <v-list-group
                        v-for="item in items"
                        :key="item.title"
                        v-model="item.active"
                        :prepend-icon="item.action"
                        no-action
                    >
                        <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                        </template>

                        <v-list-item v-for="child in item.items" :key="child.title">
                            <router-link :to="child.route">
                                <v-list-item-content>
                                    <v-list-item-title v-text="child.title"></v-list-item-title>
                                </v-list-item-content>
                            </router-link>
                        </v-list-item>
                    </v-list-group>
                </v-list>
            </v-navigation-drawer>
        </div>

        <v-main>
            <router-view></router-view>
        </v-main>

        <div v-if="authenticated">
        <v-divider class="mx-1 my-5"></v-divider>
            <v-footer class="transparent" padless>
                <v-row no-gutters>
                    <v-btn color="black" text rounded class="text-capitalize">Quem somos</v-btn>
                    <v-btn color="black" text rounded class="text-capitalize">Ajuda</v-btn>
                    <v-btn color="black" text rounded class="text-capitalize">Fale conosco</v-btn>
                </v-row>
            </v-footer>
        </div>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    el: '#app',
    data: () => ({
        drawer: true,
        items: [
            {
                action: 'mdi-home',
                title: 'Home',
                active: true,
                items: [{
                    title: 'Home',
                    route: '/'
                }],
            },
            {
                title: 'Cadastros',
                action: 'mdi-pencil',
                items: [
                    {
                        title: 'Cliente' ,
                        route: '/client'
                    },
                    {
                        title: 'Categoria',
                        route: '/'
                    },
                ],
            },
        ],
    }),
    computed: mapGetters({
        authenticated: 'auth/check'
    }),
    mounted(){
        this.verifyAuth();
    },
    methods: {
        async verifyAuth(){
            if(window.localStorage.getItem('token')){
                await this.$store.dispatch('auth/verify');
                this.$router.push({ name: 'home' })
            }
        },
        async logout(){
            await this.$store.dispatch('auth/logout');
            this.$router.push({ name: 'login' })
        }
    }
}
</script>


<style>
*{
    padding: 0;
    margin: 0;
}

.v-application ::-webkit-scrollbar {
    height: 8px;
    width: 13px;
}

.v-application ::-webkit-scrollbar-corner {
    background: transparent;
}

.v-application ::-webkit-scrollbar-thumb {
    background: #d5dbff;
    border-radius: 8px;
}

</style>
