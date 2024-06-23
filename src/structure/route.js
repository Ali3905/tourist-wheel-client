import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RoutingConfig } from '../config/routingConfig';
import { SubpageRoutingConfig } from '../config/subpageRoutingConfig';
import Layout from './layout';
import FormBuilder from "../pages/builders/formBuilder";
import OverView from '../pages/overView/overView';

const route = () => {
    return (
        <Routes>
            <Route element={<Layout />} >
                <Route path='/' element={<OverView />} />
            </Route>
            <Route element={<Layout />}>
                {RoutingConfig.map((data, key) => (
                    <Route
                        key={key}
                        path={data.path}
                        element={data.component}
                    />
                ))}

                <Route element={<FormBuilder />}>
                    {SubpageRoutingConfig.map((data, key) => (
                        <Route
                            key={key}
                            path={data.path}
                            element={data.component}
                        />
                    ))}
                </Route>
            </Route>
            <Route />
        </Routes>
    )
};

export default route;
