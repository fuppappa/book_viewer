import React from 'react';
import {useHistory} from 'react-router-dom';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import {fade} from "@material-ui/core/styles";
import {pink} from "@material-ui/core/colors";
import HomeIcon from '@material-ui/icons/Home';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import {GlobalSettings} from '../Componets/Settings';

const TitleName = 'フッパッパの森'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: pink[400],
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    list: {
        width: 250
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },

    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },

    MainContent: {
        margin: '50px 0 50px 0',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '80%'
        }
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


function SearchInHeader(props) {


    const handleSearch = e => {
        const obj = {name: e.target.value};
        const method = "POST";
        const body = JSON.stringify(obj);
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        if (e.key === 'Enter' && e.target.value !== "") {
            console.log(e.target.value);
            fetch(GlobalSettings.serverUrl + GlobalSettings.path.search, {method, headers, body})
                .then((res) => res.json())
                .then(books_list => {
                    console.log(books_list);
                })
                .catch(console.error);

            props.history.push('/result');
        }
        // エンターキー押下時の処理
    };

    return (
        <div className={props.classes.search}>
            <div className={props.classes.searchIcon}>
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="本を検索....."
                classes={{
                    root: props.classes.inputRoot,
                    input: props.classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
                onKeyPress={handleSearch}
            />
        </div>
    );
}


export default function Header() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    const ToggleDrawer = open => event => {
        console.log("event", event);
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setOpen(open);
    };

    return (
        <div>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar)}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={ToggleDrawer(!open)}
                        edge="start"
                        className={clsx(classes.menuButton)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        {TitleName}
                    </Typography>
                    <SearchInHeader classes={classes} history={history}/>

                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                open={open}
                onClose={ToggleDrawer(false)}
                onOpen={ToggleDrawer(true)}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={ToggleDrawer(false)}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <div
                    className={clsx(classes.list)}
                    role="presentation"
                    onClick={ToggleDrawer(false)}
                    onKeyDown={ToggleDrawer(false)}
                >
                    <List>
                        {[{name: "ホーム", link: "/", icon: <HomeIcon/>},
                            {name: "検索結果", link: "/result"},
                            {name: "ビュワー", link: "/viewer"},
                            {name: "アップロード", link: "/viewer", icon: <CloudUploadIcon/>},
                            {name: "ダウンロード", link: "/viewer", icon: <SaveIcon/>}
                        ].map((text, index) => (
                            <ListItem button component="a" key={text.name} href={text.link}>
                                <ListItemIcon>
                                    {text.icon}

                                </ListItemIcon>
                                <ListItemText primary={text.name}/>

                            </ListItem>
                        ))}
                    </List>
                </div>
            </SwipeableDrawer>
        </div>
    );
}
