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

import { CalciteIcon } from '@esri/calcite-components-react';
import React from 'react';

interface IProps {
    isActive: boolean;
    // label:string,
    onChange: () => void;
}

class CheckboxToggle extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const { isActive, onChange } = this.props;

        return (
            <div
                className="hidden md:flex items-center justify-center cursor-pointer my-1"
                onClick={onChange}
            >
                {isActive ? (
                    <CalciteIcon icon="check-square" scale="s" />
                ) : (
                    <CalciteIcon icon="square" scale="s" />
                )}

                <span className="text-sm ml-1">
                    Only versions with{' '}
                    <span className="text-white">local changes</span>
                </span>
            </div>
        );
    }
}

export default CheckboxToggle;
