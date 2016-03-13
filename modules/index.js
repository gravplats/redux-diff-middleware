import { DiffPatcher } from 'jsondiffpatch/src/diffpatcher';
import { log } from 'jsondiffpatch/src/formatters/console';


export default (options) => ({ getState }) => {
    const diffpatcher = new DiffPatcher(options);

    return (next) => (action) => {
        const lhs = getState();
        const result = next(action);
        const rhs = getState();

        const delta = diffpatcher.diff(lhs, rhs);
        log(delta);

        return result;
    };
};
