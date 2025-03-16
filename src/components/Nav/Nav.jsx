import { Form, NavLink } from 'react-router-dom';
import logomark from '../../logo.svg';
import './Nav.css';

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logomark} alt="" height={30} />
        <h4 className='project-title'>HomeBudget</h4>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!window.confirm('Delete user and all data?')) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>

            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1"
              viewBox="0 0 48 48"
              enable-background="new 0 0 48 48"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                fill="#FF8A65"
                points="24,21.3 12.7,10 26,1.7 38.3,10"
              ></polygon>
              <polygon
                fill="#FFAB91"
                points="24,21.3 12.7,10 17,4.7 38.3,10"
              ></polygon>
              <path
                fill="#B39DDB"
                d="M30.6,44H17.4c-2,0-3.7-1.4-4-3.4L9,11h30l-4.5,29.6C34.2,42.6,32.5,44,30.6,44z"
              ></path>
              <path
                fill="#7E57C2"
                d="M38,13H10c-1.1,0-2-0.9-2-2v0c0-1.1,0.9-2,2-2h28c1.1,0,2,0.9,2,2v0C40,12.1,39.1,13,38,13z"
              ></path>
            </svg>
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
