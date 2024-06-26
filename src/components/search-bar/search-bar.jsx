import { Paper, IconButton } from '@mui/material'
import { colors } from '../../constants/colors'
import { Search } from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()

    const submitHandler = e => {
        e.preventDefault()
        if (value) {
            navigate(`/search/${value}`)
        }
    }

    return (
        <Paper component={'form'}
            onSubmit={submitHandler}
            sx={{ border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: 'none', mr: 5 }} className='my-form' >
            <input
                type="text"
                className='search-bar'
                placeholder='Search...'
                value={value}
                onChange={e => setValue(e.target.value)} />
            <IconButton type='submit'>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar