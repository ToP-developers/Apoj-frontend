import Main from './views/Main/Main';
import SignUp from './views/SignUp/SignUp';
import SignIn from './views/SignIn/SignIn';
import SinglePlayer from './views/SinglePlayer/SinglePlayer';
import MultiPlayer from './views/MultiPlayer/MultiPlayer';

import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import TopComponent from './components/TopComponent/TopComponent';


import CreateTopRouter from './modules/CreateTopRouter/CreateTopRouter';
import ServiceWorkerRegister from './services/ServiceWorker/ServiceWorker';

ServiceWorkerRegister();

CreateTopRouter('main', [
    {
        path: '',
        component: Main
    },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/signin',
        component: SignIn
    },
    {
        path: '/singleplayer',
        component: SinglePlayer
    },
    {
        path: '/multiplayer',
        component: MultiPlayer
    }
], [new Header(), Loading, new TopComponent('div', {'class': 'content'})]);
