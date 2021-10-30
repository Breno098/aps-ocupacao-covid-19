function requirePage (path) {
    return () => import(`../pages/${path}.vue`).then(m => m.default || m)
}

export default [
    {
        path: '/auth/login',
        name: 'login',
        component: requirePage('Auth/login'),
    },
    {
        path: '/',
        name: 'home',
        component: requirePage('App/home')
    },
    {
        path: '/client/:id',
        name: 'client.show',
        component: requirePage('App/Client/form')
    },
    {
        path: '/client',
        name: 'client',
        component: requirePage('App/Client/list'),
    },
    // {
    //     path: '*',
    //     component: requirePage('App/home')
    // },
];
