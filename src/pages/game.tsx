import Game from '../components/pages/game';
import {useAppSelector} from '../hooks/redux';

export const GamePage = () => {
  const {loadingStatus, error} = useAppSelector(state => state.common);

  if (loadingStatus === 'failed') {
    return <div>{error}</div>;
  }
  if (loadingStatus === 'pending') {
    return <div>... Loader</div>;
  }

  return <Game />;
};
