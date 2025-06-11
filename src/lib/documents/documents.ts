'use strict';

export interface Parent {
    id: string;
    name: string;
    name_japanese: string | undefined;
}

export interface Candidate{
    id: string;
    url: string;
    parent: Parent | undefined;
    name: string;
    name_english: string | undefined;
    name_japanese: string | undefined;
    aliases: string[] | undefined;
}
