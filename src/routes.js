import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Base from './components/Base';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';
import AboutPage from './components/about/AboutPage';

export default (
    <Route path="/" component={Base}>
        <IndexRoute component={HomePage} />
        <Route path='/courses' component={CoursesPage} />
        <Route path='/about' component={AboutPage} />
    </Route>
);