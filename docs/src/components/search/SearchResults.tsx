import Link from 'next/link';
import { FC } from 'react';

import { SearchResult } from './types/result';

export const SearchResults: FC<{ data: SearchResult }> = ({ data }) => {
    return (
        <>
            <div className="w-full bg-neutral-50 pt-4">
                {data.hits.length === 0 && (
                    <div className="flex w-full flex-col items-center bg-neutral-50 py-8 text-center">
                        <div className="text-4xl">🤷‍♀️</div>
                        <div className="">No results found</div>
                        <div className="text-sm">Try a different search</div>
                    </div>
                )}
                <ul className="bg-neutral-50 py-2">
                    {data.hits.map((hit) => (
                        <li className="hlem">
                            <Link
                                href={'/' + hit.slug}
                                className="z-10 block w-full px-4 py-1"
                            >
                                <div className="truncate font-bold">
                                    ✨&nbsp;&nbsp;
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: hit._formatted.title,
                                        }}
                                    />
                                </div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            hit._formatted.content ??
                                            hit._formatted.description,
                                    }}
                                    className="h-[2em] truncate pl-8 text-[#3f3f46]"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="text-2xs flex w-full justify-between rounded-b-xl border-t bg-neutral-50 px-4 py-1 text-neutral-400">
                <div>{data.estimatedTotalHits} hits for search</div>
                <div>{data.processingTimeMs}ms</div>
            </div>
        </>
    );
};
