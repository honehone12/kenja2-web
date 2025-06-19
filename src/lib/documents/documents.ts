'use strict';

export interface Parent {
    id: string;
    name: string;
    name_japanese: string | undefined;
}

export interface Candidate{
    id: string;
    parent: Parent | undefined;
    name: string;
    name_english: string | undefined;
    name_japanese: string | undefined;
}

export interface SearchResult {
    candidates: Candidate[] | undefined;
}

export interface SingleDocument extends Candidate {
    url: string;
    aliases: string[] | undefined;
}
