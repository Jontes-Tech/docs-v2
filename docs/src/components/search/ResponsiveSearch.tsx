'use client';

import { MagnifyingGlassSVG } from '@ensdomains/thorin';
import { useState } from 'react';
import { FiLoader } from 'react-icons/fi';
import useSWR from 'swr';

import { searchFetcher } from './lib/fetcher';
import { SearchResults } from './SearchResults';

export const ResponsiveSearch = () => {
    const [search, setSearch] = useState('');
    const { data, error, isLoading, isValidating } = useSWR(
        { search },
        searchFetcher,
        {
            keepPreviousData: true,
        }
    );
    const [select, setSelect] = useState(-1);
    const showSearch = search.length > 0 && data;

    return (
        <div id="searchbar" className="w-full text-[#18181b]">
            <div className="relative z-10 overflow-hidden rounded-xl border bg-white">
                <input
                    type="text"
                    onClick={() => {
                        setSelect(-1);
                    }}
                    className="w-full rounded-xl py-2 pl-10 text-xl"
                    placeholder="Search for anything..."
                    // eslint-disable-next-line jsx-a11y/no-autofocus
                    autoFocus={true}
                    id="search-input"
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                />
                <div className="absolute inset-y-0 left-3 flex h-full items-center text-neutral-300">
                    <MagnifyingGlassSVG />
                </div>
                <div className="absolute inset-y-0 right-3 flex h-full items-center text-neutral-300">
                    {isLoading && <FiLoader />}
                </div>
            </div>
            <div className="w-full -translate-y-4">
                <div className="w-full overflow-hidden rounded-b-xl">
                    {showSearch && (
                        <SearchResults
                            data={data}
                            select={select}
                            setSelect={setSelect}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
