import {RootState} from '../store';
import {optionsAdapter} from './options.slice';

export const {selectById: selectOptionById} = optionsAdapter.getSelectors<RootState>(state => state.options);
