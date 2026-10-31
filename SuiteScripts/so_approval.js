/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/log'], (log) => {
    const APPROVAL_LIMIT = 20000;

    const beforeSubmit = (context) => {
        const so = context.newRecord;
        const total = so.getValue('total');
        if (total > APPROVAL_LIMIT) {
            so.setValue('custbody_need_approval', true);
            log.audit('需审批', '订单金额 ' + total);
        }
    };

    return { beforeSubmit };
});