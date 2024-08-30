import '../assets/styles/users.scss'
import { countries } from '../assets/data/countries';
import { statuses } from '../assets/data/statuses';
import { departments } from '../assets/data/departments';
import addIndex from '../assets/data/features';
import { UserContext } from '../components/UsersContext';
import { useContext } from 'react';


function removeUser(users, id) {
  return users.filter((user) => user.id !== id)
}

export default function User() {
  const {usersList, setUsersList} = useContext(UserContext)
  const countryList = addIndex(countries);
  // const usersList = addIndex(users)
  const departmentList = addIndex(departments);

  return (
    <div className="container">
      <div className="users-block">
        <h2 className='users-block__title'>Users</h2>
        <div className="users-block__filters">
          <p>Please add at least 3 departmetns to be able to proceed next steps.</p>
          <div className="users-block__filters-list filters">
            <div className='filters__list'>
              <div className='filters__select'>
                <select name="user_cars">
                  <option value="" className='selected'>Choose department</option>
                  {departmentList.map((elem) => (
                    <option value={elem.value} key={elem.id}>{elem.name}</option>
                  ))

                  }
                </select>
              </div>

              <div className='filters__select'>
                <select name="user_profile_color_1" >
                  <option value="" className='selected'>Select country</option>
                  {countryList.map(elem => (
                    <option value={elem.value} key={elem.id}>{elem.name}</option>
                  ))}
                </select>
              </div>

              <div className='filters__select'>
                <select name="" id="">
                  {statuses.map(elem => (
                    <option value={elem.value} key={elem.name}>{elem.name}</option>
                  ))}
                </select>
              </div>

              <div className="filters__reset btn remove-btn">

              </div>
            </div>
            <div className='btn btn--sm'>Add user</div>
          </div>
        </div>

        <div className="users-list">
          <div className="users-list__item item grid">
            <div className="item--head">Full Name</div>
            <div className="item--head">Department</div>
            <div className="item--head">Country</div>
            <div className="item--head">Status</div>
          </div>

          {usersList.map(user => (
            <div className="users-list__item item grid" key={user.id}>
              <div className="item--name">{user.name}</div>
              <div className="item">{user.department.name}</div>
              <div className="item">{user.country.name}</div>
              <div className="item">{user.status.name}</div>
              <div className="item--remove btn btn--clear"
                onClick={() => setUsersList(removeUser(usersList, user.id))}
              ></div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}