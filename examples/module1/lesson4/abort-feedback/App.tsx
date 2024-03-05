import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

const showError = () => {
  const message = document.getElementById('error-msg');
  const button = document.getElementById('error-btn');
  message?.classList.remove('hidden');
  button?.classList.remove('hidden');
};

const hideError = () => {
  const message = document.getElementById('error-msg');
  const button = document.getElementById('error-btn');
  message?.classList.add('hidden');
  button?.classList.add('hidden');
};

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  let timeoutId: NodeJS.Timeout | undefined = undefined;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(({ users }) => {
        clearTimeout(timeoutId);
        hideError();
        setUsers(users);
      });
    timeoutId = setTimeout(() => {
      showError();
    }, 5000);
  }, []);

  const handleErrorBtnClick = () => {
    hideError();
    fetch(API_URL)
      .then((res) => res.json())
      .then(({ users }) => {
        setUsers(users);
      });
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex flex-row items-center">
          <p className="mr-2 hidden" id="error-msg">
            Sorry, there seems to be connectivity issues...
          </p>
          <button
            className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4 hidden"
            id="error-btn"
            onClick={handleErrorBtnClick}
          >
            Try again
          </button>
        </div>
      </div>
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li
            className="bg-white p-4 rounded-md border border-gray-100"
            key={index}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
