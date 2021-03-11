import { useQuery } from '@apollo/client';

import { GET_CATEGORIES } from 'graphql/schemas/category';

const Categories: React.FC<any> = () => {
    const { data: categories } = useQuery(GET_CATEGORIES);
    return categories
}

export default Categories;