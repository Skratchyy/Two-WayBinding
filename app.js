const app = Vue.createApp({
    data() {
        return {
            message: "Hello World",
            inputMessage: '',
            confirmedInput: ''
        }
    },
    methods: {
        showMessage() {
            alert(this.message);
        },
        confirmInput(event) {
            this.confirmedInput = event.target.value;
        }
    }
})

app.mount("#assignment");