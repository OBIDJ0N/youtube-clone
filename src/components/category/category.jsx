import { Stack } from '@mui/material'
import { category } from '../../constants'
import { colors } from '../../constants/colors'

const Category = ({ setSelectedCategoryHandler, selectedCategory }) => {
    return (
        <Stack direction={'row'} sx={{ overflow: 'scroll' }}>
            {category.map(item => (
                <button key={item.name} className='category-btn' style={{ borderRadius: '0', background: item.name === selectedCategory && colors.secondary, color: item.name === selectedCategory && '#fff'  }} onClick={() => setSelectedCategoryHandler(item.name)}>
                    <span style={{ color: item.name === selectedCategory ? '#fff' : colors.secondary, marginRight: '15px' }}>
                        {item.icon}
                    </span>
                    <span style={{ opacity: '1' }}>
                        {item.name}
                    </span>
                </button>
            ))}
        </Stack>
    )
}

export default Category