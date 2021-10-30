function requirePage (path) {
    return () => import(`../pages/${path}.vue`).then(m => m.default || m)
}

export default [
    {
        path: '/',
        name: 'home',
        component: requirePage('home')
    },
    // {
    //     path: '*',
    //     component: requirePage('App/home')
    // },
];
