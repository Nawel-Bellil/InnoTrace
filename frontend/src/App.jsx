import user from './constants/User.js'
import Layout from './pages/Layout'
const App = () => {
  console.log(user)
  return (
    <div className='bg-gray-300'>
         <Layout profile={user} />

    </div>
  )
}

export default App