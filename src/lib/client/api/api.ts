import { HttpBufferApi } from "$lib/client/api/http-buffer-api";
import type { BufferApi } from "$lib/client/api/buffer-api";

// const API_URL = "/api/anime-search/buffer/f4ac68bf97f233df";
const API_URL =
  "https://ufar96w31m.execute-api.ap-northeast-1.amazonaws.com/api/anime-search/buffer/f4ac68bf97f233df";
const api: BufferApi = new HttpBufferApi(API_URL);

export default api;
