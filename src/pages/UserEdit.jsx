/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import '../assets/styles/edit.scss';
import { UserContext } from '../components/UsersContext';

export default function UserEdit() {
  const {usersList} = useContext(UserContext);

  return (
    <div className="container">
      <div className="edit-block">
        <h2 className='edit-block__title'>Edit user</h2>

        <div className='edit-block__content'>
          <div className='edit-block__user'>
            <span className='label--name'>User</span>
            <p className='input-field__name'>here you should choose user</p>
          </div>

          <div className='edit-block__edit'>
            <p className='edit-block__edit-title'>User information</p>
            <div className='edit-block__edit-fields'>
              <div className='edit-block__edit-field'>
                <span className='label--name'>Full Name</span>
                <p className='input-field__name'>here you should choose user</p>
              </div>

              <div className='edit-block__edit-field'>
                <span className='label--name'>Department</span>
                <p className='input-field__name'>here you should choose user</p>
              </div>
            </div>

            <div className='edit-block__edit-fields'>
              <div className='edit-block__edit-field'>
                <span className='label--name'>Country</span>
                <p className='input-field__name'>here you should choose user</p>
              </div>

              <div className='edit-block__edit-field'>
                <span className='label--name'>Staus</span>
                <p className='input-field__name'>here you should choose user</p>
              </div>
            </div>
          </div>
        </div>

        <div className='edit-block__buttons'>
          <button className='btn btn--sm'>Undo</button>
          <button className='btn btn--xl isDisabled'>Save</button>
        </div>

      </div>
    </div>
  )
}