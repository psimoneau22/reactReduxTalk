import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from './shared/reducer';
import Films from "./films";
import People from "./people";
import Planets from "./planets";
import Species from "./species";
import Starships from "./starships";
import Vehicles from "./vehicles";

const areas = [
    { key: 'people', name: 'People', Component: People },
    { key: 'films', name: 'Films', Component: Films },
    { key: 'planets', name: 'Planets', Component: Planets },
    { key: 'species', name: 'Species', Component: Species },
    { key: 'starships', name: 'Starships', Component: Starships },
    { key: 'vehicles', name: 'Vehicles', Component: Vehicles },
]

export default function Step() {
    const dispatch = useDispatch();
    const tab = useSelector(state => state.shared.tab);

    const handleSelectTab = key => () => dispatch(changeTab(key));

    return (
        <div>
            <div>
                {areas.map(area => (
                    <button
                        key={area.key}
                        onClick={handleSelectTab(area.key)}
                        className={`area-tab${tab === area.key ? ' --active' : '' }`}
                    >
                        {area.name}
                    </button>
                ))}
            </div>

            {areas.map(area => (
                tab === area.key && <area.Component key={area.key} />
            ))}

        </div>
    )
}
