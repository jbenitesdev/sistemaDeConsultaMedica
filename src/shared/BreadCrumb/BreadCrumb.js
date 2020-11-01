import React from "react";
import {Link as RouterLink, matchPath, withRouter} from 'react-router-dom';
import {Breadcrumbs, Link, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { ProSidebar, SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 2),
        background: '#fafafa',
    },
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
    content: {
        marginLeft: '265px',
        display: 'flex',
        flexDirection: 'column',
    },
    contentText: {
        color: '#0067B3',
        fontWeight: 'bold',
        fontSize: '25px',
    }
}))

const BreadCrumb = props => {
    const classes = useStyles();
    console.log("PROPS BREADCRUMB: ", props)
    const {appRoutes, location} = props;

    if(appRoutes && appRoutes !== undefined) {
        const crumbs = appRoutes
        .map(route => ({
            route,
            match: matchPath(window.location.pathname, route.path)
        }))
        .filter(obj => (obj.match !== null))
        .sort((a, b) => {
            const aLen = a.match.url.length;
            const bLen = b.match.url.length;
            return aLen < bLen ? -1 : aLen === bLen ? 0 : 1;
        })
        .map((obj, index) => {
            const {route} = obj;
            return (
                <div key={index} className={classes.content}>
                    <div className={classes.contentText}>{route.textName ? route.textName : route.name}</div>
                    <Link color="inherit" className={classes.link} component={RouterLink} to={route.path}>{route.name}</Link>
                </div>
            );
        });

        return (
            <Paper elevation={0} className={classes.root}>
                <Breadcrumbs>
                    {crumbs}
                </Breadcrumbs>
            </Paper>
        )
    }
    else {
        return (null)
    }
};

export default BreadCrumb