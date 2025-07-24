import { useCallback, useEffect, useState, type FC } from "react"
import type { IArticleParams } from "../types/Article"
import { Box, debounce, Grid, TextField } from "@mui/material"
import SearchIcon from '../assets/icons/search_icon.svg?react'
import useSetReduxUrlParams from "../hooks/useSetReduxUrlParams"

interface IArticleFilter {
    reduxParams: IArticleParams
}

const ArticleFilter: FC<IArticleFilter> = ({ reduxParams }) => {
    const [searchValue, setSearchValue] = useState<string>(reduxParams.search);
    const setReduxUrlParams = useSetReduxUrlParams()
    const handleChange = useCallback(
        debounce((value: string) => {
            setReduxUrlParams({ search: value, page: '1' })
        }, 400),
        []
    );

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        handleChange(value);
    };

    useEffect(() => {
        if (reduxParams.search !== searchValue) {
            setSearchValue(reduxParams.search)
        }
    }, [reduxParams.search])

    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%', marginBottom: 2 }}>
            <Box sx={{ color: 'action.active', mr: 1 }} ><SearchIcon /></Box>
            <TextField
                id="filled-search"
                label="Search"
                type="search"
                variant="standard"
                sx={{
                    '& .MuiInputBase-root': {
                        color: 'white',
                    },
                    '& .MuiInputLabel-root': {
                        color: 'white',
                    },
                }}
                value={searchValue}
                onChange={onChange}
                fullWidth
            />
        </Box>
    )
}

export default ArticleFilter