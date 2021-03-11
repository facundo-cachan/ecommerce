import { useRouter } from 'next/router'

const Category = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <h1>Category: {id}</h1>
  )
}

export default Category