import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from "firebase/auth";

function isValidToken(token) {
    return token !== undefined;
}

export default {
    namespaced: true,
    state: {
        token: '',
        name: '',
        user: { },
    },
    getters: {
        isAuth(state) {
            return isValidToken(state.user.accessToken);
        },

        userEmail (state) {
            return state.user.email;
        },
        userPhoto (state) {
            return state.user.photoURL;
        },
        userName (state) {
            return state.user.name;
        },
    },
    mutations: {
        setAuthUser(state, data) {
            state.user = data || {};
        }
    },
    actions: {
        doAuth(context, data) {
            // if (data.login === 'alina' && data.password === '123') {
            //     context.state.token = data.login;
            //     return 'OK';
            // }
            // return 'error'
            const auth = getAuth();

            return signInWithEmailAndPassword(auth, data.login, data.password)
                .then((userCredential) => {
                    context.state.user = userCredential.user;
                    // console.log('Auth user', context.state.user);
                    return 'OK';
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    return `error: ${errorMessage}`
                });
        },
        logout(context) {
            context.state.user = {};
            const auth = getAuth();
            return signOut(auth).then(() => 'OK');
        },
        doCreate (context, data) {
            const auth = getAuth();
            return createUserWithEmailAndPassword(auth, data.login, data.password)
                .then((userCredential) => {
                    context.state.user = userCredential.user;
                    // console.log('Auth user', context.state.user);
                    return 'OK';
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    return `error: ${errorMessage}`
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                });
        }
    }
}