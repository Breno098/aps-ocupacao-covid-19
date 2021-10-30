 <template>
    <v-container fluid fill-height style="background: #7986CB; background: linear-gradient(to bottom, #2196F3, #90CAF9, #E3F2FD);">
        <v-layout flex align-center justify-center>
            <v-card elevation="24">
                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="form.email"
                                label="Email"
                                color="blue"
                                required
                                v-on:keyup.enter="submit"
                                outlined
                                dense
                                prepend-inner-icon="mdi-email"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-text-field
                                v-model="form.password"
                                label="Password"
                                color="blue"
                                required
                                type="password"
                                v-on:keyup.enter="submit"
                                outlined
                                dense
                                prepend-inner-icon="mdi-lock-open"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-btn color="blue white--text" v-on:click="submit" large>
                                Entrar
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: 'breno@email.com',
                password: '123456',
            }
        }
    },
    methods: {
        async submit() {
            await this.$store.dispatch('auth/login', this.form);

            this.redirect()
        },
        redirect () {
            this.$router.push({ name: 'home' })
        },
    },
}
</script>
