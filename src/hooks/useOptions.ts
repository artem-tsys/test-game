import {selectOptionById} from '../redux/options/options.selectors';
import {useAppSelector} from './redux';

export const useOption = (id: string) => useAppSelector(state => selectOptionById(state, id));

export const useOptions = (ids: string[]) => ids.map(useOption);
