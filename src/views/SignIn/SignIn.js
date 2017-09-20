import Form from '../../components/Form/Form';
import TopComponent from '../../components/TopComponent/TopComponent';

const data = {
    title: 'Авторизация',
    icon: 'fa fa-lock',
    method: 'post',
    name: 'loginForm',
    fields: [
        {
            type: 'text',
            name: 'login',
            placeholder: 'Логин...',
            class: 'loginput'
        },
        {
            type: 'password',
            name: 'password',
            placeholder: 'Пароль...',
            class: 'loginput'
        }
    ],
    buttons: [
        {
            class: 'loginSubmit',
            text: 'Войти!'
        }
    ]
};

export default class SignIn extends TopComponent {
    constructor() {
        super('div', {}, data);
    }

    init() {
        this.signin = this.build();
        this.signin.forEach(element => {
            element.renderTo('content');
            element.validation();
        });
        return this.signin;
    }

    build() {
        return [ new Form(this.getData()) ];
    }
}

