<template>
    <v-app id="inspire">
        <v-app-bar app color="grey lighten-2" height="75" >
        </v-app-bar>

        <v-main>
            <v-card class="m-2">
                <v-card-title>
                    Localização
                </v-card-title>

                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-autocomplete
                                :items="states"
                                v-model="state"
                                label="Estado"
                                outlined
                                item-value="id"
                                item-text="name"
                                @change="loadCities"
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" v-if="cities">
                            <v-autocomplete
                                :items="cities"
                                v-model="city"
                                label="Cidade"
                                outlined
                                @change="loadBed"
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
    el: '#app',
    data: () => ({
        states: [],
        state: null,
        cities: [],
        city: null
    }),
    mounted(){
        this.loadStates();
    },
    methods: {
        async loadStates(){
            axios.get('api/state').then(response => {
                this.states = response.data.states;
            })
        },
        async loadCities(){
            axios.get(`api/city/${this.state}`).then(response => {
                this.cities = response.data.cities;
            })
        },
        async loadBed(){
            axios.get(`api/bed/${this.city}`).then(response => {
                console.log(response.data);
            })
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
