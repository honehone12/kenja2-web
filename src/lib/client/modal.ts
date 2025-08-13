export const DOCUMENT_MODAL_ID = 'kenja_document_modal_dialog';
export const SEARCH_MODAL_ID = 'kenja_search_modal_dialog';
export const AGE_MODAL_ID = 'kenja_age_modal_dialog';

export function getModal(modalId: string) {
    const elem = window.document.getElementById(modalId);
    if (elem instanceof HTMLDialogElement) {
        return elem;
    } else {
        console.error('modal not found');
        return null;
    }
}

export function openAgeModal() {
    getModal(AGE_MODAL_ID)?.showModal();
}

export function openDocumentModal() {
    getModal(DOCUMENT_MODAL_ID)?.showModal();
}

export function closeDocumentModal() {
    getModal(DOCUMENT_MODAL_ID)?.close();
}

export function openSearchModal() {
    getModal(SEARCH_MODAL_ID)?.showModal();
}

export function closeSearchModal() {
    getModal(SEARCH_MODAL_ID)?.close();
}
