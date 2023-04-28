import {useAppSelector} from '../../../hooks/redux';
import {pricesSelector} from '../../../redux/common/common.selectors';
import style from './progress.module.scss';
import {Step} from './step';

export const Progress = (): JSX.Element => {
  const prices = useAppSelector(pricesSelector);

  if (!prices) return null;
  return (
    <ul className={style.progress}>
      {Object.entries(prices).map(([lvl, price]) => {
        const complexity = parseInt(lvl, 10);
        return (
          <Step
            key={complexity}
            complexity={complexity}
            price={price}
          />
        );
      })}
    </ul>
  );
};
