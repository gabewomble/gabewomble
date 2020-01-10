import { writable } from 'svelte/store';
import { THEMES } from '../constants/store';

export default writable(THEMES.LIGHT);
