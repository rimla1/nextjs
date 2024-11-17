import Link from 'next/link'

const Users = () => {
  return (
    <div>
        <h1>Dashboard Users</h1>
        <ul className='mt-10'>
            <li><Link href="/dashboard/users/1">A M</Link></li>
            <li><Link href='/dashboard/users/2'>Al Mu</Link></li>
            <li><Link href='/dashboard/users/3'>Alm Mum</Link></li>
            <li><Link href='/dashboard/users/4'>Almi Mumi</Link></li>
            <li><Link href='/dashboard/users/5'>Almir Mumin</Link></li>
        </ul>
    </div>
  )
}

export default Users