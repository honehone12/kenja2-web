import { IndexDb } from "./indexdb";

class HistoryControl {
  private static readonly HISTORY_MAX = 10;

  public async getAnimeHistory(): Promise<string[]> {
    try {
      const db = await IndexDb.instance();
      return await db.getAnimeHistory();
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  public async pushAnimeHistory(item: string): Promise<void> {
    try {
      const db = await IndexDb.instance();
      const history = await db.getAnimeHistory();

      if (history.length > HistoryControl.HISTORY_MAX) {
        history.shift();
      }
      history.push(item);

      await db.setAnimeHistory(history);
    } catch (e) {
      console.error(e);
    }
  }

  public async getCharacterHistory(): Promise<string[]> {
    try {
      const db = await IndexDb.instance();
      return await db.getCharacterHistory();
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  public async pushCharacterHistory(item: string): Promise<void> {
    try {
      const db = await IndexDb.instance();
      const history = await db.getCharacterHistory();

      if (history.length > HistoryControl.HISTORY_MAX) {
        history.shift();
      }
      history.push(item);

      await db.setCharacterHistory(history);
    } catch (e) {
      console.error(e);
    }
  }
}

const historyCtrl = new HistoryControl();

export default historyCtrl;
