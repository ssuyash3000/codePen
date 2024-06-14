import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {AnimatePresence, motion} from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { Menus, signOutAction } from '../utils/helpers'
import { slideInOut } from '../animations'

const UserProfileDetails = () => {

  // to toggle the menu dropdown
  const [isMenu, setIsMenu] = useState(false)
  
  // for user photo or letter
  const user = useSelector((state)=>state.user?.user)

  const userEmailFirstChar = user[0]?.email ? user[0].email.charAt(0) : '';
  console.log(user[0].email);
  return (
    <div
    className=' flex items-center justify-center gap-4'
    >
      <div className=' w-14 h-14 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer bg-emerald-500'>
        {
          // if user has pic
          user?.photoURL ? (<>
          <motion.img whileHover={{scale:1.2}} src={user?.photoURL} alt={user?.displayName} className=' w-full h-full object-cover'/>
          </>
          ): (
          <p className=' text-xl text-white font-semibold capitalize'>
            {userEmailFirstChar}
          </p>
       ) }
      </div>
      

      {/* dropdown icon */}
      <motion.div 
      onClick={() => setIsMenu(!isMenu)}
      whileTap={{scale:0.9}} className=' px-4 py-4 rounded-md flex items-center justify-center bg-secondary cursor-pointer'>
        <FaChevronDown className=' text-primaryText'/>
      </motion.div>

      
      {/* dropdown */}
      <AnimatePresence>
        {isMenu && (
          <>
          <motion.div 
          {...slideInOut}
          className=' bg-secondary absolute top-[110px] right-16 px-4 py-3 rounded-xl shadow-md z-10 flex flex-col items-start justify-start gap-4 min-w-[225px]'>

{Menus && Menus.map(menu => (
  <Link to={menu.uri} key={menu.id}
  className=' text-primaryText text-lg hover:bg-[rgba(256,256,256,0.05)] px-2 py-1 w-full rounded-md'
  >
    {menu.name}
  </Link>
))}

<motion.p
onClick={signOutAction}
whileTap={{scale:0.9}}
className=' text-primaryText text-lg hover:bg-[rgba(256,256,256,0.05)] px-2 py-1 w-full rounded-md'
>
  Sign Out
</motion.p>

</motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default UserProfileDetails