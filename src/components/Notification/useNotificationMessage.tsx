import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectSuggestedReferenceLayerLocale } from '@store/Map/reducer';

export enum NotificationType {
    SET_REFERENCE_LAYER_LOCALE = 'SET_REFERENCE_LAYER_LOCALE',
}

/**
 * Custom hook that determines the type of notification message to display.
 *
 * @returns {NotificationType} The type of notification to display.
 */
export const useNotificationMessage2Display = (): NotificationType => {
    const suggestedReferenceLayerLocale = useSelector(
        selectSuggestedReferenceLayerLocale
    );

    const notificationType = useMemo(() => {
        if (suggestedReferenceLayerLocale) {
            return NotificationType.SET_REFERENCE_LAYER_LOCALE;
        }

        return null;
    }, [suggestedReferenceLayerLocale]);

    return notificationType;
};
