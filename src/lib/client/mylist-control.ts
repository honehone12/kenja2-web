import { IndexDb } from "$lib/client/indexdb";
import type { FlatDocument } from "$lib/documents/anime-search/documents";

class MyListControl {
  private static readonly MYLIST_MAX = 1000;

  private _isInitialized: boolean = false;
  private _myMap: Map<string, boolean> = new Map();

  /**
   * this can throw
   *
   * this have to be called from client,
   * server instance panics immediately
   */
  private async initialize(): Promise<void> {
    if (this._isInitialized) {
      return;
    }

    const db = await IndexDb.instance();
    const mylist = await db.getMyListKeys();
    mylist.forEach((value) => this._myMap.set(value, true));
    this._isInitialized = true;
  }

  public async getMyList(): Promise<FlatDocument[]> {
    try {
      await this.initialize();
      const db = await IndexDb.instance();
      return await db.getMyList();
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  public async hasStar(id: string): Promise<boolean> {
    try {
      await this.initialize();
      return this._myMap.has(id);
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  public async star(doc: FlatDocument | undefined): Promise<void> {
    if (!doc) {
      return;
    }
    if (this._myMap.size >= MyListControl.MYLIST_MAX) {
      return;
    }

    try {
      await this.initialize();
      if (this._myMap.has(doc.id)) {
        return;
      }

      const db = await IndexDb.instance();
      await db.addMyList(doc);
      this._myMap.set(doc.id, true);
    } catch (e) {
      console.error(e);
    }
  }

  public async unstar(id: string): Promise<void> {
    try {
      await this.initialize();
      if (!this._myMap.has(id)) {
        return;
      }

      const db = await IndexDb.instance();
      await db.deleteMyList(id);
      this._myMap.delete(id);
    } catch (e) {
      console.error(e);
    }
  }
}

const mylistCtrl = new MyListControl();

export default mylistCtrl;
