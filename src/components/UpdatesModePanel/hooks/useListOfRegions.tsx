import { useWorldImageryUpdatesLayerWhereClause } from '@components/WorldImageryUpdatesLayers/useWorldImageryUpdatesLayerWhereClause';
import { useAsync } from '@hooks/useAsync';
import { getListOfCountries } from '@services/world-imagery-updates/getListOfCountries';
import { useAppSelector } from '@store/configureStore';
import { selectUpdatesModeCategory } from '@store/UpdatesMode/selectors';
import React, { useEffect } from 'react';

export const useListOfRegions = () => {
    const category = useAppSelector(selectUpdatesModeCategory);

    const [listOfRegions, setListOfRegions] = React.useState<string[]>([]);

    const { isLoading, error, execute } = useAsync(getListOfCountries);

    // get the where clause for the world imagery updates layer
    // but ignore the region filter. This where clause is used to fetch the list of regions
    // that match the selected category and other filters
    const whereClause = useWorldImageryUpdatesLayerWhereClause(true);

    useEffect(() => {
        (async () => {
            try {
                // console.log('Fetching list of regions for category:', category);
                const regions = await execute(category, whereClause);
                // console.log('Fetched regions:', regions);
                setListOfRegions(regions);
            } catch (e) {
                console.error('Error fetching list of regions:', e);
                setListOfRegions([]);
            }
        })();
    }, [category, whereClause]);

    return {
        listOfRegions,
        isLoading,
        error,
    };
};
