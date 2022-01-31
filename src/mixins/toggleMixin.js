export default {
    name: 'toggleMixins',
    data () {
        return {
            dialogVisible: false,
        }
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        hideDialog1() {
            this.$emit('update:show', false);
        },
        hideDialog () {
            this.dialogVisible = false;
        },
        showDialog () {
            this.dialogVisible = true;
        }
    },
    mounted() {

    }
}