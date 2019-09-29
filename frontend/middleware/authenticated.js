
export default function ({ store, redirect, route }) {
    const userIsLoggedIn = !!store.getters['auth/getIsConnected'];
    
    console.log('userIsLoggedIn', userIsLoggedIn);
    
    if (!userIsLoggedIn) {
        return redirect('/login');
    }
    return Promise.resolve();
}
