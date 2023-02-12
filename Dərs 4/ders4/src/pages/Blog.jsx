import { Outlet, useSearchParams } from "react-router-dom"

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams()

  console.log(searchParams.get('category'))
  console.log(searchParams.get('search'))
  return (
    <>
      <h1>Blog səhifəsi</h1>
      <nav>
        .. Qlobal olaraq bloq və alt bloqlarda görünür ..
      </nav>
      <Outlet />
    </>
  )
}



