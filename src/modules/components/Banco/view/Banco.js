import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import GetAppIcon from '@material-ui/icons/GetApp';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const currencies = [
    {
        value: 'TODOS',
        label: 'TODOS',
    },
    {
        value: 'BRADESCO',
        label: 'BRADESCO',
    },
    {
        value: 'ITAÚ',
        label: 'ITAÚ',
    },
    {
        value: 'SANTANDER',
        label: 'SANTANDER',
    },
    {
        value: 'BB',
        label: 'BANCO DO BRASIL',
    },
];

const dadosBanco = [
    {
        banco: 'BRADESCO',
        tipo: 'RET',
        arquivo: 'CV120800.RET',
        dataGeracao: new Date('2020-08-12T00:00:00'),
        geradoPor: 'WPARREIRA',
        total: 'R$ 110.266,19',

    },
    {
        banco: 'SANTANDER',
        tipo: 'RET',
        arquivo: 'CV120801.RET',
        dataGeracao: new Date('2020-08-12T00:00:00'),
        geradoPor: 'WPARREIRA',
        total: 'R$ 80.100,19',
    },
    {
        banco: 'BRADESCO',
        tipo: 'RET',
        arquivo: 'CV120802.RET',
        dataGeracao: new Date('2020-10-12T00:00:00'),
        geradoPor: 'ADMINISTRATOR',
        total: 'R$ 50.000,99',
    },
    {
        banco: 'SANTANDER',
        tipo: 'RET',
        arquivo: 'CV120803.RET',
        dataGeracao: new Date('2020-08-12T00:00:00'),
        geradoPor: 'WPARREIRA',
        total: 'R$ 25.111,19',
    },
    {
        banco: 'SANTANDER',
        tipo: 'RET',
        arquivo: 'CV120804.RET',
        dataGeracao: new Date('2020-08-05T00:00:00'),
        geradoPor: 'ADMINISTRATOR',
        total: 'R$ 80.266,19',
    },
    {
        banco: 'BRADESCO',
        tipo: 'RET',
        arquivo: 'CV120805.RET',
        dataGeracao: new Date('2020-08-30T00:00:00'),
        geradoPor: 'WPARREIRA',
        total: 'R$ 300.266,19',
    },
]

const useStyles = makeStyles(theme => ({
    tableRow: {
        cursor: 'pointer',
    },
    content: {
        margin: theme.spacing(2, 1),
        color: '#0067B3'
    },
    contentTitle: {
        display: 'flex',
        marginLeft: '5px',
    },
    card: {
        margin: theme.spacing(1, 1),
    },
    cardHeader: {
        backgroundColor: '#E9E9E9',
        color: '#0067B3',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '5px',
    },
    cardTitle: {
        fontSize: '15px',
    },
    button: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        float: 'right',
    },
    form: {
    },
    formRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    textCampo: {
        height: '80px'
    },
    inputSelect: {
        width: '200px',
    },
    table: {
        marginTop: theme.spacing(1),
    }
}));

function Banco() {
    const classes = useStyles();
    const [dados, setFilter] = React.useState(dadosBanco);
    const [banco, setBanco] = React.useState('TODOS');    
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [arquivo, setArquivo] = React.useState()
    const [total, setTotal] = React.useState()
    
    const handleChangeSelect = (event) => {
        limparFiltros()
        setBanco(event.target.value)
        handleFilter(event.target.value, 'banco')
    };

    const handleTextChange = (event) => {
        limparFiltros()
        setArquivo(event.target.value)
        handleFilter(event.target.value, 'arquivo')
    }

    const handleTotalTextChange = (event) => {
        limparFiltros()
        setTotal(event.target.value)
        handleFilter(event.target.value, 'total')
    }

    const handleDateChange = (date) => {
        limparFiltros()
        setSelectedDate(date)
        handleFilter(date, 'dataGeracao')
    };

    const handleFilter = (value, field) => {
        const result = []
        console.log("VALUE: ", value)

        dadosBanco.map(dado => {
            if (field === 'arquivo' || field === 'total') {
                if (dado[field].indexOf(value) > -1) {
                    result.push(dado)
                }    
            }
            else if (dado[field] === value || value === 'TODOS') {
                result.push(dado)
            }
            else if (field === 'dataGeracao' && value.toLocaleDateString() === dado[field].toLocaleDateString()) {
                result.push(dado)
            }
        })
        
        setFilter(result)
    }

    const limparFiltros = () => {
        setFilter(dadosBanco)
        setBanco('TODOS')
        setSelectedDate(null)
        setArquivo('')
        setTotal('')
    }

    const headCells = [
        {id: 'banco', numeric: false, disablePadding: false, label: 'Banco'},
        {id: 'tipo', numeric: false, disablePadding: false, label: 'Tipo'},
        {id: 'arquivo', numeric: false, disablePadding: false, label: 'Arquivo'},
        {id: 'dataGeracao', numeric: false, disablePadding: false, label: 'Dt.Geração'},
        {id: 'geradoPor', numeric: false, disablePadding: false, label: 'Gerado Por'},
        {id: 'total', numeric: false, disablePadding: false, label: 'Total'},
        {id: 'acoes', numeric: false, disablePadding: false, label: ''},
    ];
    
    const enchanceTableHeader = () => {
        return (
            <TableHead>
                <TableRow>
                    {headCells.map(headCell => (
                        <TableCell key={headCell.id} align={headCell.numeric ? 'right' : 'left'} padding={headCell.disablePadding ? 'none' : 'default'} sortDirection={false}>
                            {headCell.label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    };
    
    const enhanceTableBody = () => {
        return (
            <TableBody>
                {
                    dados.map((item: any, labelId) => 
                    <TableRow hover tabIndex={-1} key={labelId}>
                        <TableCell align="left">{item.banco}</TableCell>
                        <TableCell align="left">{item.tipo}</TableCell>
                        <TableCell align="left">{item.arquivo}</TableCell>
                        <TableCell align="left">{item.dataGeracao.toLocaleDateString()}</TableCell>
                        <TableCell align="left">{item.geradoPor}</TableCell>
                        <TableCell align="left">{item.total}</TableCell>
                        <TableCell align="center">    
                            <GetAppIcon />
                        </TableCell>
                    </TableRow>)
                }
                {dados && dados.length === 0 && (
                    <TableRow style={{height: 49}}>
                        <TableCell align="center" colSpan={12}>
                            Nenhum dado foi encontrado
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        );
    };
    
    return (
        <div className="col-12 default-div">
            <div className="col-12 default-div">
                <div className={classes.contentTitle}>
                    <FolderIcon /><span>CONSULTAR ARQUIVO BANCÁRIO (REMESSA/RETORNO)</span>
                </div>
                <div>
                    <Card className={classes.card}>
                        <CardHeader title={(<div className={classes.cardHeader}><SearchIcon /><span className={classes.cardTitle}>Filtro de Pesquisa</span></div>)} />
                        <CardContent>
                            <form className={classes.form} noValidate autoComplete="off">
                                <div className={classes.formRow}>
                                    <TextField id="outlined-select-currency" select label="Select" value={banco} onChange={handleChangeSelect} helperText="" className={classes.inputSelect} variant="outlined">
                                        {currencies.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField id="nossoNumero" label="Arquivo" variant="outlined" value={arquivo} onChange={handleTextChange} />
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker margin="normal" id="date-picker-dialog" label="Date picker dialog" format="dd/MM/yyyy" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{ 'aria-label': 'change date', }} />
                                    </MuiPickersUtilsProvider>
                                    <TextField className={classes.textCampo} id="total" label="Total" variant="outlined" value={total} onChange={handleTotalTextChange} />
                                </div>
                            </form>
                            <div>
                                <Table aria-labelledby="tableTitle" size={'medium'} className={classes.table}>
                                    {enchanceTableHeader()}
                                    {enhanceTableBody()}
                                </Table>
                            </div>
                        </CardContent>

                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Banco;
