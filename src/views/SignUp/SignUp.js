import Form from '../../components/Form/Form';
import TopComponent from '../../components/TopComponent/TopComponent';

const data = {
    title: 'Регистрация',
    icon: 'fa fa-pencil',
    method: 'post',
    name: 'registrationForm',
    fields: [
        {
            type: 'text',
            name: 'login',
            placeholder: 'Логин...',
            class: 'reginput'
        },
        {
            type: 'email',
            name: 'email',
            placeholder: 'Email...',
            class: 'reginput'
        },
        {
            type: 'password',
            name: 'password',
            placeholder: 'Пароль...',
            class: 'reginput'
        },
        {
            type: 'password',
            name: 'repeat-password',
            placeholder: 'Повторите пароль...',
            class: 'reginput'
        }
    ],
    buttons: [
        {
            class: 'registrationSubmit',
            text: 'Зарегистрироваться!'
        }
    ]
};

export default class SignUp extends TopComponent {
    constructor() {
        super('div', {}, data);
    }

    init() {
        this.signup = this.build();
        this.signup.forEach(element => {
            element.renderTo('content');
            element.validation();
        });
        return this.signup;
    }

    build() {
        return [ new Form(this.getData()) ];
    }
}
