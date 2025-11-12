import type { FlatDocument } from "$lib/documents/anime-search/documents";

export class IndexDb {
  private static readonly DB_NAME: string = "kenjaLocalData";
  private static readonly META_STORE: string = "metaData";
  private static readonly META_MY_LISTKEYS: string = "myListkeys";
  private static readonly MY_LIST_STORE: string = "myList";
  private static readonly HISTORY_STORE = "history";
  private static readonly HISTORY_ANIME = "histAnime";
  private static readonly HISTORY_CHARACTER = "histCharacter";

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
      const req = indexedDB.open(IndexDb.DB_NAME, 101);
      req.onerror = () => reject("failed to open index db");
      req.onupgradeneeded = (ev) => {
        const db = (ev.target as IDBOpenDBRequest).result;
        const storeList = db.objectStoreNames;

        if (!storeList.contains(IndexDb.META_STORE)) {
          db.createObjectStore(IndexDb.META_STORE);
        }
        if (!storeList.contains(IndexDb.MY_LIST_STORE)) {
          db.createObjectStore(IndexDb.MY_LIST_STORE, { keyPath: "id" });
        }
        if (!storeList.contains(IndexDb.HISTORY_STORE)) {
          db.createObjectStore(IndexDb.HISTORY_STORE);
        }
      };
      req.onsuccess = () => resolve(new IndexDb(req.result));
    });
  }

  private getHistory(key: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      const req = this._db
        .transaction(IndexDb.HISTORY_STORE)
        .objectStore(IndexDb.HISTORY_STORE)
        .get(key);
      req.onerror = () => reject("failed to get history");
      req.onsuccess = () => resolve(req.result ?? []);
    });
  }

  /**
   * this can throw
   */
  public getAnimeHistory(): Promise<string[]> {
    return this.getHistory(IndexDb.HISTORY_ANIME);
  }

  /**
   * this can throw
   */
  public getCharacterHistory(): Promise<string[]> {
    return this.getHistory(IndexDb.HISTORY_CHARACTER);
  }

  private setHistory(key: string, value: string[]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const req = this._db
        .transaction(IndexDb.HISTORY_STORE, "readwrite")
        .objectStore(IndexDb.HISTORY_STORE)
        .put(value, key);
      req.onerror = () => reject("failed to put history");
      req.onsuccess = () => resolve();
    });
  }

  /**
   * this can throw
   */
  public setAnimeHistory(value: string[]): Promise<void> {
    return this.setHistory(IndexDb.HISTORY_ANIME, value);
  }

  /**
   * this can throw
   */
  public setCharacterHistory(value: string[]): Promise<void> {
    return this.setHistory(IndexDb.HISTORY_CHARACTER, value);
  }

  /**
   * this can throw
   */
  public getMyListKeys(): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      const req = this._db
        .transaction(IndexDb.META_STORE)
        .objectStore(IndexDb.META_STORE)
        .get(IndexDb.META_MY_LISTKEYS);
      req.onerror = () => reject("failed to get my list keys");
      req.onsuccess = () => resolve(req.result ?? []);
    });
  }

  /**
   * this can throw
   */
  public getMyList(): Promise<FlatDocument[]> {
    return new Promise<FlatDocument[]>((resolve, reject) => {
      const req = this._db
        .transaction(IndexDb.MY_LIST_STORE)
        .objectStore(IndexDb.MY_LIST_STORE)
        .getAll();
      req.onerror = () => reject("failed to get my list");
      req.onsuccess = () => resolve(req.result ?? []);
    });
  }

  /**
   * this can throw
   */
  public addMyList(doc: FlatDocument): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const tx = this._db.transaction(
        [IndexDb.MY_LIST_STORE, IndexDb.META_STORE],
        "readwrite",
      );
      tx.onerror = () => reject("failed to add to my list");
      tx.oncomplete = () => resolve();

      const list = tx.objectStore(IndexDb.MY_LIST_STORE);
      const add = list.add(doc);
      add.onsuccess = () => {
        const keys = list.getAllKeys();
        keys.onsuccess = () =>
          tx
            .objectStore(IndexDb.META_STORE)
            .put(keys.result, IndexDb.META_MY_LISTKEYS);
      };
    });
  }

  /**
   * this can throw
   */
  public deleteMyList(id: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const tx = this._db.transaction(
        [IndexDb.MY_LIST_STORE, IndexDb.META_STORE],
        "readwrite",
      );
      tx.onerror = () => reject("failed to delete from my list");
      tx.oncomplete = () => resolve();

      const list = tx.objectStore(IndexDb.MY_LIST_STORE);
      const del = list.delete(id);
      del.onsuccess = () => {
        const keys = list.getAllKeys();
        keys.onsuccess = () =>
          tx
            .objectStore(IndexDb.META_STORE)
            .put(keys.result, IndexDb.META_MY_LISTKEYS);
      };
    });
  }
}
