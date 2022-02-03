export default {
    name: 'toggleMixins',
    data () {
        return {
            dialogVisible: false,
            animation: '',

        }
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        hideDialogWithoutBtn() {
            setTimeout ( ()=> this.$emit('update:show', false), 500 );
            this.$emit('update:class', 'animate_out');
        },

        showDialog () {
            this.dialogVisible = true;
            this.animation = 'animate_in';
        },

        hideDialog () {
            setTimeout ( ()=> this.dialogVisible = false, 500 );
            this.animation = 'animate_out';
        },
        goTo(link) {
            this.$router.push(link)
        },
    },
    mounted() {

    }
}