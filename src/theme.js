import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({
    var: {
        mainBackground: '#FFFFFF',
        secondaryBackground: '#F5F5F5',
        tableTextColor: '#000000CC',
        textLight: '#707070',
        textColor: '#AEADB3',
        textColorDark: '#828282',
        mainColor: '#39B3C5',
        mainColorLight: '#39B3C533',
        positiveColor: '#52E5BB',
        negativeColor: '#FFA071',
        selectedItemBackground: '#BEE3E933',
        titleBackground: '#FFFFFF80',
        gradient: {
            colorFrom: '#1162D7',
            colorTo: '#52E5BB',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    pallete: {
        text: {
            primary: '#AEADB3',
        },
    },
    shape: {
        borderRadius: 8,
    },
});

theme = {
    ...theme,
    overrides: {
        MuiBox: {
            root: {
                paddingLeft: 0,
            },
        },
        MuiTableCell: {
            root: {
                textAlign: 'left!important',
                font: 'normal 12px/12px Roboto!important',
                letterSpacing: `${0}!important`,
                opacity: 1,
            },
        },
        MuiTableFooter: {
            root: {
                display: 'contents!important',
            },
        },
        MuiPaper: {
            elevation2: {
                boxShadow: {},
                marginLeft: theme.spacing(0),
            },
        },
        MuiDrawer: {
            paper: {
                backgroundColor: theme.var.mainBackground,
            },
        },
        MuiButton: {
            label: {
                textTransform: 'none',
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing(1),
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: 'none',
                margin: '0 16px',
                minWidth: 0,
                padding: 0,
                [theme.breakpoints.up('md')]: {
                    padding: 0,
                    minWidth: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing(1),
            },
            colorInherit: {
                color: theme.var.mainColor,
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: '#404854',
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        ...theme.mixins,
        toolbar: {
            minHeight: 48,
            overflowX: 'hidden',
        },
    },
};

export default theme;
