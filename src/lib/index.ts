export const MAX_KW_LEN = 100;
export const OID_LEN = 24;
export const DOCUMENT_MODAL_ID = 'kenja_document_modal_dialog';
export const SEARCH_MODAL_ID = 'kenja_search_modal_dialog';
export const MAX_REF_LEN = 180;

export function getModal(modalId: string) {
    const elem = document.getElementById(modalId);
    if (elem instanceof HTMLDialogElement) {
        return elem;
    } else {
        console.error('modal not found');
        return null;
    }
}
