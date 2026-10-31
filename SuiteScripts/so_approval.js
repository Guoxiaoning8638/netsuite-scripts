/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/log'], (log) => {
    const APPROVAL_LIMIT = 10000;

    const beforeSubmit = (context) => {
        const so = context.newRecord;
        const total = so.getValue('total');
        if (total > APPROVAL_LIMIT) {
            so.setValue('custbody_need_approval', true);
        }
    };

    return { beforeSubmit };
});