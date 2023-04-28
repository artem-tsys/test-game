import cn from 'classnames';
import {useAppSelector} from '../../../hooks/redux';
import {questionNumberSelector} from '../../../redux/common/common.selectors';
import {Border} from '../border/border';
import style from './progress.module.scss';

interface StepProps {
  complexity: number;
  price: string;
}

export const Step = ({complexity, price}: StepProps): JSX.Element => {
  const questionNumber = useAppSelector(questionNumberSelector);
  const className = cn({
    [style.step__current]: complexity === questionNumber,
    [style.step__disable]: complexity < questionNumber,
  });

  return (
    <li className={cn(style.step, className)}>
      {price}
      <Border />
    </li>
  );
};
