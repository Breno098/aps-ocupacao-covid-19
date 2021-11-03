<template>
    <v-app id="inspire">
        <v-app-bar app color="deep-purple accent-4" height="50" class="d-flex justify-center">
            <v-toolbar-title class="white--text">
                Ocupação Covid 19 (por municipio)
            </v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-card class="m-2">
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
                                dense
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" v-if="cities">
                            <v-autocomplete
                                :items="cities"
                                v-model="city"
                                label="Cidade"
                                outlined
                                dense
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="12" v-if="cities">
                            <v-btn block @click="loadBed" color="green"> Buscar </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>


            <v-card class="m-2" v-if="datas.total">
                <v-card-title>
                    <v-icon class="mr-2">mdi-city</v-icon>
                    Dados do municipio sobre ocupação por covid 19
                </v-card-title>

                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="4">
                            <v-list dense>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title> Oferta de respiradores  </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-icon> {{ datas.total ? datas.total.ofertaRespiradores : '' }} </v-list-item-icon>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title> Oferta de clinicas  </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-icon> {{ datas.total ? datas.total.ofertaHospCli : '' }} </v-list-item-icon>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title> Oferta de Uti  </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-icon> {{ datas.total ? datas.total.ofertaHospUti : '' }} </v-list-item-icon>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title> Ocupação de Uti  </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-icon> {{ datas.total ? datas.total.ocupHospUti : '' }} </v-list-item-icon>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title> Ocupação de Clinica  </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-icon> {{ datas.total ? datas.total.ocupHospCli : '' }} </v-list-item-icon>
                                </v-list-item>
                                 <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title> Altas  </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-icon> {{ datas.total ? datas.total.altas : '' }} </v-list-item-icon>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title> Obitos  </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-icon> {{ datas.total ? datas.total.obitos : '' }} </v-list-item-icon>
                                </v-list-item>
                            </v-list>
                        </v-col>

                        <v-col cols="12" sm="4">
                            <v-card v-if="city" elevation="0" transparent>
                                <v-card-text>
                                    Altas e obitos
                                </v-card-text>
                                <v-card-text>
                                    <pie-charts :chart-data="datasAltasObitos" :height="180"></pie-charts>
                                    <!-- <line-chart :chart-data="datacollection" :options="{responsive: true}" :height="180"></line-chart> -->
                                </v-card-text>
                            </v-card>
                        </v-col>

                        <v-col cols="12" sm="4">
                            <v-card v-if="city" elevation="0" transparent>
                                <v-card-text>
                                    UTI
                                </v-card-text>
                                <v-card-text>
                                    <pie-charts :chart-data="datasUti" :height="180"></pie-charts>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>

            <v-card class="mt-4 mb-2 ml-4 mr-4" v-if="datas.unidades" color="deep-purple accent-4">
                <v-card-text class="d-flex justify-center white--text">
                    Lista de unidades do município
                    <v-icon class="ml-2" color="white">mdi-clipboard-arrow-down</v-icon>
                </v-card-text>
            </v-card>

            <v-card class="m-2" v-for="(unidade, index) in datas.unidades" :key="index">
                <v-card-title>
                    <v-icon class="mr-2">mdi-hospital-building</v-icon>
                    {{ unidade.nomeCnes }} | {{ unidade.municipio }} - {{ unidade.estado }}
                </v-card-title>

                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="4">
                            <v-list dense>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title> Oferta de respiradores  </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-icon> {{ unidade ? unidade.ofertaRespiradores : '' }} </v-list-item-icon>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title> Oferta de clinicas  </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-icon> {{ unidade ? unidade.ofertaHospCli : '' }} </v-list-item-icon>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title> Oferta de Uti  </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-icon> {{ unidade ? unidade.ofertaHospUti : '' }} </v-list-item-icon>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title> Ocupação de Uti  </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-icon> {{ unidade ? unidade.ocupHospUti : '' }} </v-list-item-icon>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title> Ocupação de Clinica  </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-icon> {{ unidade ? unidade.ocupHospCli : '' }} </v-list-item-icon>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title> Altas  </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-icon> {{ unidade ? unidade.altas : '' }} </v-list-item-icon>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title> Obitos  </v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-icon> {{ unidade ? unidade.obitos : '' }} </v-list-item-icon>
                                </v-list-item>
                            </v-list>
                        </v-col>

                        <v-col cols="12" sm="4">
                            <v-card v-if="city" elevation="0" transparent>
                                <v-card-text>
                                    Altas e obitos
                                </v-card-text>
                                <v-card-text>
                                    <pie-charts :chart-data="getDatasChartsAltasObitos(unidade.altas, unidade.obitos)" :height="180"></pie-charts>
                                </v-card-text>
                            </v-card>
                        </v-col>

                        <v-col cols="12" sm="4">
                            <v-card v-if="city" elevation="0" transparent>
                                <v-card-text>
                                    UTI
                                </v-card-text>
                                <v-card-text>
                                    <pie-charts :chart-data="getDatasChartsUti(unidade.ofertaHospUti, unidade.ocupHospCli)" :height="180"></pie-charts>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-main>

        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title> Carregando dados... </v-card-title>

                <v-card-text class="d-flex justify-center align-center p-5">
                    <v-progress-circular
                        :size="150"
                        color="deep-purple accent-4"
                        indeterminate
                    ></v-progress-circular>
                </v-card-text>
            </v-card>
        </v-dialog>
  </v-app>
</template>

<script>
import axios from 'axios';
import LineChart from './components/LineCharts.js'
import PieCharts from './components/PieCharts.js'

export default {
    el: '#app',
    components: {
        LineChart,
        PieCharts
    },
    data: () => ({
        dialog: false,
        states: [],
        state: null,
        cities: [],
        city: null,
        datacollection: null,
        datas: {},
        datasAltasObitos: null,
        datasUti: null
    }),
    mounted(){
        this.loadStates();

         this.fillData();
    },
    methods: {
        getDatasChartsAltasObitos(altas, obitos){
            return {
                hoverBackgroundColor: "red",
                labels: ["Altas", "Obitos"],
                datasets: [
                    {
                        label: "Altas",
                        backgroundColor: ["#41B883", "#E46651"],
                        data: [ altas, obitos ]
                    }
                ]
            };
        },
        getDatasChartsUti(ofertas, ocupacao){
            return {
                hoverBackgroundColor: "#eee",
                labels: ["Ofertas", "Ocupação"],
                datasets: [
                    {
                        label: "Uti",
                        backgroundColor: ["#4290f5", "#E46651"],
                        data: [ ofertas, ocupacao ]
                    }
                ]
            };
        },
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
            this.dialog = true;

            axios.get(`api/bed/${this.city}`).then(response => {
                this.datas = response.data;

                this.datasAltasObitos = {
                    hoverBackgroundColor: "red",
                    labels: ["Altas", "Obitos"],
                    datasets: [
                        {
                            label: "Altas",
                            backgroundColor: ["#41B883", "#E46651"],
                            data: [
                                response.data.total.altas, 
                                response.data.total.obitos
                            ]
                        }
                    ]
                };

                this.datasUti = {
                    hoverBackgroundColor: "#eee",
                    labels: ["Ofertas", "Ocupação"],
                    datasets: [
                        {
                            label: "Uti",
                            backgroundColor: ["#4290f5", "#E46651"],
                            data: [
                                response.data.total.ofertaHospUti, 
                                response.data.total.ocupHospCli
                            ]
                        }
                    ]
                };

                this.dialog = false;
            })
        },
        fillData() {
            this.datacollection = {
                labels: [10, 20],
                datasets: [
                {
                    label: "Data One",
                    backgroundColor: "#eee",
                    data: [10, 20]
                },
                ]
            };
        },
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

.stackSheet {
   position: relative;
}

.stackSpark {
   position: absolute;
   top: 0;
   left: 0;
}

</style>
