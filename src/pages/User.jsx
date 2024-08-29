import '../assets/styles/users.scss'
import {users} from '../assets/data/person';

export default function User() {
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
                  <option value="1">Nissan</option>
                  <option value="2">Toyota</option>
                  <option value="3">BMW</option>
                  <option value="4">Wolksvagen</option>
                  <option value="5">Skoda</option>
                  <option value="6">Mercedes-Benz</option>
                </select>
              </div>

              <div className='filters__select'>
                <select name="user_profile_color_1" >
                  <option value="1">Синий</option>
                  <option value="2">Зеленый</option>
                  <option value="3">Желтый</option>
                  <option value="4">Красный</option>
                  <option value="5">Оранжевый</option>
                  <option value="6">Черный</option>
                </select>
              </div>

              <div className='filters__select' aria-disabled>
                <select name="" id="">
                  <option value="1">Синий</option>
                  <option value="2">Зеленый</option>
                  <option value="3">Желтый</option>
                  <option value="4">Красный</option>
                  <option value="5">Оранжевый</option>
                  <option value="6">Черный</option>
                </select>
              </div>

              <div className="filters__reset remove-btn">

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

          {users.map(user => (
            <div className="users-list__item item grid" key={user.name}>
              <div className="item--name">{user.name}</div>
              <div className="item">{user.department.name}</div>
              <div className="item">{user.country.name}</div>
              <div className="item">{user.status.name}</div>
              <div className="item--remove"></div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}