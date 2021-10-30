<template>
    <v-row class="justify-center mx-5 my-5">
        <v-col cols="12">
            <v-card>
                <v-card-title class="d-flex justify-end mb-6">
                        <v-btn text color="blue" >
                            Adicionar <v-icon dark>mdi-plus</v-icon>
                        </v-btn>
                </v-card-title>
                <v-card-text>

                    <v-data-table
                        :headers="table.headers"
                        :items="table.clients"
                        :search="search"
                        :loading="table.loading"
                    >
                        <template v-slot:top>
                            <v-toolbar flat>
                                <v-spacer></v-spacer>
                                <v-toolbar-title>
                                        <v-text-field
                                        v-model="search"
                                        append-icon="mdi-magnify"
                                        label="Procurar"
                                        single-line
                                        color="blue"
                                    ></v-text-field>
                                </v-toolbar-title>
                            </v-toolbar>
                        </template>
                        <template v-slot:item="row">
                            <tr>
                                <td>{{row.item.name}}</td>
                                <td>{{row.item.fantasy_name}}</td>
                                <td>{{row.item.type}}</td>
                                <td>{{row.item.document}}</td>
                                <td>
                                    <v-menu transition="slide-y-transition" bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn text block v-bind="attrs" v-on="on">
                                                <v-icon>mdi-dots-vertical</v-icon>
                                            </v-btn>
                                        </template>

                                        <v-list nav dense>
                                            <v-list-item v-on:click="_edit(row.item.id)">
                                                <v-list-item-icon>
                                                    <v-icon outlined color="green">mdi-pencil</v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title> Editar </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item v-on:click="confirmDelete(row.item)">
                                                <v-list-item-icon>
                                                    <v-icon outlined color="red">mdi-delete</v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title> Deletar </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>
                </v-card-text>

                <v-dialog v-model="dialog" max-width="350">
                    <v-card>
                        <v-card-title>
                            Confirmar exclusão do cliente?
                        </v-card-title>
                        <v-card-text>
                            {{ deleted.name }}
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green" text @click="dialog = false">
                               Fechar
                            </v-btn>
                            <v-btn color="red" text @click="_delete">
                                Excluir
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        deleted: {},
        search: '',
        table: {
            headers: [{
                text: 'Nome',
                value: 'name'
            }, {
                text: 'Nome Fantasia',
                value: 'fantasy_name'
            }, {
                text: 'Tipo',
                value: 'type'
            }, {
                text: 'Documento',
                value: 'document'
            }, {} ],
            clients: [],
            loading: false,
        }
    }),
    mounted() {
        this._load();
    },
    methods: {
        async _load(){
            this.table.loading = true;

            await window.axios.get('api/client').then(response => {
                if(response.data.success){
                    this.table.clients = response.data.data;
                    this.table.loading = false;
                }
            });
        },
        _edit(id){
            this.$router.push({
                name: 'client.show',
                params: { id }
            })
        },
        async _delete(){
            this.table.loading = true;

            await window.axios.delete(`api/client/${this.deleted.id}`).then(response => {
                 if(response.data.success){
                    this.table.loading = false;
                    this._load();
                }
            });

            this.dialog = false;
        },
        filterOnlyCapsText (value, search, item) {
            return value != null && search != null && typeof value === 'string' && value.toString().indexOf(search) !== -1
        },
        confirmDelete(deleted){
            this.deleted = deleted;
            this.dialog = true;
        }
    },

}
</script>

<style>

</style>
