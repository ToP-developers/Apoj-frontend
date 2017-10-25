import TopComponent from '../../TopComponent/TopComponent';
import GameText from '../GameText/GameText';
import BackButton from '../../BackButton/BackButton';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import UserService from '../../../services/UserService/UserService';

import './EndingPage.scss';

export default class ListeningPage extends TopComponent {
    constructor(data) {
        super('div', {'class': 'ending-page'}, data);
    }

    render() {
        if (this.getData().isWin) {
            this._components = [
                new GameText({
                    text: 'Победа!',
                    title: true
                }),
                new VideoPlayer({
                    src: '/static/video/win.mp4',
                    type: 'video/mp4'
                }),
                new GameText({
                    text: `Ваш новый счет ${UserService.getScore('single')}`
                })
            ];
        } else {
            this._components = [
                new GameText({
                    text: 'Вы проиграли',
                    title: true
                })
            ];
        }

        const content = new TopComponent('div', {'class': 'ending-page__content'});
        const backButton = new BackButton();

        this._components.forEach(element => {
            content.append(element.render());
        });

        this.append(content.render());
        this.append(backButton.render());

        return this.getElement();
    }
}
