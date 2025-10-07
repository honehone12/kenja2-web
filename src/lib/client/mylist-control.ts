import { IndexDb, INDEX_DB_MAX } from "$lib/client/indexdb";
import type { FlatDocument } from "$lib/documents/anime-search/documents";

class MyListControl {
  private _indexDb: IndexDb | null = null;
  private _myMap: Map<string, boolean> = new Map();

  private async initialize() {
    if (!this._indexDb) {
      this._indexDb = await IndexDb.open();
      const mylist = await this._indexDb.getMyListKeys();
      mylist.forEach((value) => this._myMap.set(value, true));
    }
  }

  public async getMyList() {
    try {
      await this.initialize();
      if (!this._indexDb) {
        return [];
      }

      return await this._indexDb.getMyList();
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  public async hasStar(id: string) {
    try {
      await this.initialize();
      return this._myMap.has(id);
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  public async star(doc: FlatDocument | undefined) {
    if (!doc) {
      return;
    }
    if (this._myMap.size >= INDEX_DB_MAX) {
      return;
    }

    try {
      await this.initialize();
      if (!this._indexDb) {
        return;
      }
      if (this._myMap.has(doc.id)) {
        return;
      }

      await this._indexDb.addMyList(doc);
      this._myMap.set(doc.id, true);
    } catch (e) {
      console.error(e);
    }
  }

  public async unstar(id: string) {
    try {
      await this.initialize();
      if (!this._indexDb) {
        return;
      }
      if (!this._myMap.has(id)) {
        return;
      }

      await this._indexDb.deleteMyList(id);
      this._myMap.delete(id);
    } catch (e) {
      console.error(e);
    }
  }
}

const mylistCtrl = new MyListControl();

export default mylistCtrl;
