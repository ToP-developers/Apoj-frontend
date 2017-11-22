import TopComponent from '../../components/TopComponent/TopComponent';
import loading from '../../components/Loading/Loading';

export default class GameScene extends TopComponent {
    constructor() {
        super('div', {'class': 'game'});
        if (GameScene.__instance) {
            return GameScene.__instance;
        }

        this._stage = null;
        GameScene.__instance = this;
    }

    setStage(stage) {
        this._stage = stage;
        this._rerender();
    }

    destroy() {
        this._stage = null;
        this.remove();
    }

    _render() {
        if (this._stage) {
            this.append(this._stage.render());
            loading.hide();
        }
        this.renderTo('content');
    }

    _rerender() {
        loading.show();
        this.clear();
        this._render();
    }
}
