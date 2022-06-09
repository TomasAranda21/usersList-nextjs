import Router from "next/router"


const Users = ({user}) => {

  return (
    <div className="p-5">
        <h2 className="text-center text-uppercase mb-4 ">Users</h2>

        <ul className="list-group ">
            {user?.map(users => (

                <li className="list-group-item list-group-item-action 
                d-flex align-items-center justify-content-around py-3 cursor-pointer" 
                key={users.id}
                onClick={e => Router.push('/users/[id]', `/users/${users.id}`)}
                style={{cursor: "pointer"}}
                >

                    <img src={users.avatar} style={{borderRadius: '50%'}}/>
                    <div>
                        <h5> {users.first_name} {users.last_name} </h5>
                        <p className="text-info font-weight-bold">Email: {users.email} </p>
                    </div>
                </li>
            ))

            }
        </ul>

    </div>
  )
}

export default Users