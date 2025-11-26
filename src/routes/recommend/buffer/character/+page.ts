import { MAX_RECOMMEND_SRC } from "$lib";
import historyCtrl from "$lib/client/history-conrol";
import api from "$lib/client/api/api";
import { ItemType } from "$lib/documents/anime-search/queries";
import { emptyRecommendResult } from "$lib/client/errors";

export async function load() {
  const itemType = ItemType.Character;
  const hist = await historyCtrl.getCharacterHistory();
  const isRecommended = hist.length > 0 && hist.length <= MAX_RECOMMEND_SRC;

  if (!isRecommended) {
    return { recommend: emptyRecommendResult(itemType) };
  }

  try {
    const bufferedStream = api.multiVectorSearch(itemType, hist);
    return { recommend: { isRecommended, itemType, bufferedStream } };
  } catch {
    console.error("error on multi vector search");
    return { recommend: emptyRecommendResult(itemType) };
  }
}
