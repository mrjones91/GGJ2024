import './Game.css';
import { useDispatch, useSelector } from 'react-redux';
import { simpleAction } from './redux/actions/simpleAction';

function Game() {
    const number = useSelector((state) => state.simple.number);
    const dispatch = useDispatch();

    return (
        <div className="App">
            {number}
            <button
                type="button"
                onClick={() => dispatch(simpleAction())}
            >
                Click!
            </button>
        </div>
    );
}

export default Game;