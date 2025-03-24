import React from 'react'
export const userDataContext = createContext()

const UserContext = ({childreen}) => {
  const [user, setUser] = useState({
    email: '',
    fullName: {
        firstName: '',
        lastName: ''
    }
})

  return (
    <div>
      <UserDataContext.Provider value={userData}>
      {childreen}
      </UserDataContext.Provider>
    </div>
  )
}

export default UserContext