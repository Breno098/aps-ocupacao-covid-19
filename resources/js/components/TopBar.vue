<template>
    <div>
        <v-system-bar app color="blue" height="25">
            <v-spacer></v-spacer>

            <v-btn class="white--text" text small>
                Ajuda
            </v-btn>
        </v-system-bar>

        <v-app-bar app color="grey lighten-2" height="75">
            <v-app-bar-nav-icon @click="drawer_open = !drawer_open"></v-app-bar-nav-icon>

            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon color="blue">mdi-home</v-icon>
                    </v-btn>
                </template>
                <span>Inicio</span>
            </v-tooltip>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    props: {
        drawer: null
    },
    data: () => ({
        drawer_open: this.drawer,
    }),
    methods: {
        changeValue: function () {
            this.drawer_open= !this.drawer_open;
            this.$emit('menu-open', this.drawer_open)
        }
    },
}
</script>

<style>

</style>
