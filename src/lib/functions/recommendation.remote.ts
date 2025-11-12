import { query } from "$app/server";
import { internalError } from "$lib/server/errors";
import kenja from "$lib/server/kenja";
import logs from "$lib/server/logs";
import * as v from "valibot";

const RecommendationSchema = v.object({
  item_type: v.pipe(v.number(), v.integer()),
  ids: v.array(v.string()),
});

export const remoteRecommend = query(RecommendationSchema, async (params) => {
  try {
    const result = await kenja
      .animeSearch()
      .multiVectorSearch(params.item_type, params.ids);
    return result;
  } catch (err) {
    logs.error(err, "error on recommendation");
    return internalError();
  }
});
