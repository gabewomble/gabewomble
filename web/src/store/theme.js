import { writable } from 'svelte/store';
import { THEMES } from '../constants/store';

export default writable(new Date().getHours() >= 18 ? THEMES.DARK : THEMES.LIGHT);
