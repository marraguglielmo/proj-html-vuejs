import { reactive } from 'vue';
import db from './db';

export const store = reactive({
    dBase: db
})