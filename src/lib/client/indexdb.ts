import type { FlatDocument } from "$lib/documents/anime-search/documents";

export class IndexDb {
  private static readonly DB_NAME: string = "kenjaLocalData";
  private static readonly META_STORE: string = "metaData";
  private static readonly My_LIST_STORE: string = "myList";
  private static readonly META_MY_LIST_KEYS: string = "myListkeys";

  private _db: IDBDatabase;

  // We don't export default
  // as this should be wrapped by specific utility classes
  // and exporting null instance will increase chances of troubles.
  private static _instance: IndexDb | null = null;

  private constructor(db: IDBDatabase) {
    this._db = db;
  }

  /**
   * this can throw
   */
  public static async instance() {
    if (!IndexDb._instance) {
      IndexDb._instance = await IndexDb.open();
    }

    return IndexDb._instance;
  }

  private static open() {
    return new Promise<IndexDb>((resolve, reject) => {
      const req = indexedDB.open(IndexDb.DB_NAME, 100);
      req.onerror = () => reject("failed to open index db");
      req.onupgradeneeded = (ev) => {
        let db = (ev.target as IDBOpenDBRequest).result;
        let storeList = db.objectStoreNames;

        if (!storeList.contains(IndexDb.META_STORE)) {
          db.createObjectStore(IndexDb.META_STORE);
        }
        if (!storeList.contains(IndexDb.My_LIST_STORE)) {
          db.createObjectStore(IndexDb.My_LIST_STORE, { keyPath: "id" });
        }
      };
      req.onsuccess = () => resolve(new IndexDb(req.result));
    });
  }

  public getMyListKeys() {
    return new Promise<string[]>((resolve) => {
      const req = this._db
        .transaction(IndexDb.META_STORE)
        .objectStore(IndexDb.META_STORE)
        .get(IndexDb.META_MY_LIST_KEYS);
      req.onerror = () => resolve([]);
      req.onsuccess = () => resolve(req.result ?? []);
    });
  }

  public getMyList() {
    return new Promise<FlatDocument[]>((resolve) => {
      const req = this._db
        .transaction(IndexDb.My_LIST_STORE)
        .objectStore(IndexDb.My_LIST_STORE)
        .getAll();
      req.onerror = () => resolve([]);
      req.onsuccess = () => resolve(req.result ?? []);
    });
  }

  /**
   * this can throw
   */
  public addMyList(doc: FlatDocument) {
    return new Promise<void>((resolve, reject) => {
      const tx = this._db.transaction(
        [IndexDb.My_LIST_STORE, IndexDb.META_STORE],
        "readwrite",
      );
      tx.onerror = () => reject("failed to add to my list");
      tx.oncomplete = () => resolve();

      const list = tx.objectStore(IndexDb.My_LIST_STORE);
      const add = list.add(doc);
      add.onsuccess = () => {
        const keys = list.getAllKeys();
        keys.onsuccess = () =>
          tx
            .objectStore(IndexDb.META_STORE)
            .put(keys.result, IndexDb.META_MY_LIST_KEYS);
      };
    });
  }

  /**
   * this can throw
   */
  public deleteMyList(id: string) {
    return new Promise<void>((resolve, reject) => {
      const tx = this._db.transaction(
        [IndexDb.My_LIST_STORE, IndexDb.META_STORE],
        "readwrite",
      );
      tx.onerror = () => reject("failed to delete from my list");
      tx.oncomplete = () => resolve();

      const list = tx.objectStore(IndexDb.My_LIST_STORE);
      const del = list.delete(id);
      del.onsuccess = () => {
        const keys = list.getAllKeys();
        keys.onsuccess = () =>
          tx
            .objectStore(IndexDb.META_STORE)
            .put(keys.result, IndexDb.META_MY_LIST_KEYS);
      };
    });
  }
}
