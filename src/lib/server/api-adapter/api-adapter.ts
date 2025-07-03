'use strict';

import type {TextQuery, VectorQuery, DocumentQuery} from "$lib/documents/queries";
import type { SearchResult, SingleDocument } from "$lib/documents/documents";

export interface ApiAdapter {
    textSearch(q: TextQuery): Promise<SearchResult>;
    vectorSearch(q: VectorQuery): Promise<SearchResult>;
    document(q: DocumentQuery): Promise<SingleDocument>;
}
