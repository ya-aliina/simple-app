function isValidToken (token) {
    return token !== '';
}
export default {
    namespaced: true,
    state: {
        token: '',
        name: '',
    },
    getters: {
        isAuth(state) {
            return isValidToken(state.token);
        }
    },
    mutations: {

    },
    actions: {
        doAuth (context, data) {
            if (data.login === 'alina' && data.password === '123') {
                context.state.token = data.login;
                return 'OK';
            }
            return 'error'
        }
    }
}