/* Copyright 2024 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { combineReducers } from 'redux';
import UI from './UI/reducer';
import Map from './Map/reducer';
import SwipeView from './Swipe/reducer';
import WaybackItems from './Wayback/reducer';
import AnimationMode from './AnimationMode/reducer';
import DownloadMode from './DownloadMode/reducer';
import UpdatesMode from './UpdatesMode/reducer';

export default combineReducers({
    UI,
    Map,
    SwipeView,
    WaybackItems,
    AnimationMode,
    DownloadMode,
    UpdatesMode,
});
