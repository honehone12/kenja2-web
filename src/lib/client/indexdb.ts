import type { FlatDocument } from "$lib/documents/anime-search/documents";

export class KenjaIndexDb {
    public static DB_NAME: string = 'kenjaLocalData';
    public static META_STORE: string = 'metaData';
    public static My_LIST_STORE: string = 'myList';
    public static META_MY_LIST_KEYS: string = 'myListkeys';

    private _db: IDBDatabase;

    private constructor(db: IDBDatabase) {
        this._db = db;
    }

    public static open() {
        return new Promise<KenjaIndexDb>((resolve, reject) => {
            const req = indexedDB.open(KenjaIndexDb.DB_NAME, 100);
            req.onerror = () => reject(req.error);
            req.onupgradeneeded = (ev) => {
                let db = (ev.target as IDBOpenDBRequest).result;
                let storeList = db.objectStoreNames;

                if (!storeList.contains(KenjaIndexDb.META_STORE)) {
                    db.createObjectStore(KenjaIndexDb.META_STORE);
                }
                if (!storeList.contains(KenjaIndexDb.My_LIST_STORE)) {
                    db.createObjectStore(KenjaIndexDb.My_LIST_STORE, {keyPath: 'id'});
                }
            };
            req.onsuccess = () => resolve(new KenjaIndexDb(req.result));
        });
    }

    public async getMyListKeys() {
        return new Promise<string[]>((resolve) => {
            const req = this._db.transaction(KenjaIndexDb.META_STORE)
                .objectStore(KenjaIndexDb.META_STORE)
                .get(KenjaIndexDb.META_MY_LIST_KEYS);
            req.onerror = () => resolve([]);
            req.onsuccess = () => resolve(req.result ?? []);
        });
    }

    public async getMyList() {
        return new Promise<FlatDocument[]>((resolve) => {
            const req = this._db.transaction(KenjaIndexDb.My_LIST_STORE)
                .objectStore(KenjaIndexDb.My_LIST_STORE)
                .getAll();
            req.onerror = () => resolve([]);
            req.onsuccess = () => resolve(req.result ?? []);
        });
    }

    public async addMyList(doc: FlatDocument) {
        return new Promise<void>((resolve, reject) => {
            const tx = this._db.transaction(
                [KenjaIndexDb.My_LIST_STORE, KenjaIndexDb.META_STORE], 
                'readwrite'
            );
            tx.onerror = () => reject(tx.error);
            tx.oncomplete = () => resolve();

            const list = tx.objectStore(KenjaIndexDb.My_LIST_STORE);
            const add = list.add(doc);
            add.onsuccess = () => {
                const keys = list.getAllKeys();
                keys.onsuccess = () => tx.objectStore(KenjaIndexDb.META_STORE)
                    .put(keys, KenjaIndexDb.META_MY_LIST_KEYS);
            };
        });
    }

    public async deleteMyList(id: string) {
        return new Promise<void>((resolve, reject) => {
            const tx = this._db.transaction(
                [KenjaIndexDb.My_LIST_STORE, KenjaIndexDb.META_STORE],
                'readwrite'
            );
            tx.onerror = () => reject(tx.error);
            tx.oncomplete = () => resolve();

            const list = tx.objectStore(KenjaIndexDb.My_LIST_STORE);
            const del = list.delete(id);
            del.onsuccess = () => {
                const keys = list.getAllKeys();
                keys.onsuccess = () => tx.objectStore(KenjaIndexDb.META_STORE)
                    .put(keys, KenjaIndexDb.META_MY_LIST_KEYS);
            }
        });
    }
}
